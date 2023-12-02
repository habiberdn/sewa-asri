const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const User = require('../models/userModels')
const { promisify } = require('util');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
 
  const token = signToken(user.id);
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000
    ),
    httpOnly: true, //receive cookie,store it, send it automatically alomg every request
  };
  if (process.env.NODE_ENV === "Production") cookieOption.secure = true;
  //remove password from the output
  user.password = undefined;

  res.cookie("jwt", token, cookieOption);

  res.status(statusCode).json({
    status: "Success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  try{
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });
    const url = `${req.protocol}://127.0.0.1:3000/me`;
    await new Email(newUser, url).sendWelcome();
    createSendToken(newUser, 201, res);
  }catch(err){
    return next(new AppError("Email already exist!, Try another", 400));
  }
})

// exports.checkEmail = catchAsync(async (req, res, next) => {
//   const { email } = req.body;
//   console.log(email);
//   const emailDb = await prisma.user.findUnique({
//     where: {
//       email: email,
//     },
//   });
//   if (!email || !emailDb) {
//     return next();
//   }
//   if (email === emailDb.email) {
//     res.status(400).json({
//       error: "Email already exist",
//     });
//     return next(new AppError("Email already exist", 400));
//   }
//   next();
// });

exports.protect = catchAsync(async (req, res, next) => {
  // to protect the id and use the JWT
  //1. Getting token and check if it there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not log in, please log in to get access', 401)
    );
  }

  //2. Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET); //seeing if the payload token has not been manipulated by some malicious third party

  //3. Check if user still exist
  const currentUser = await User.findById(decoded.id); // execute when the user has delete the field
  if (!currentUser) {
    return next(
      new AppError(
        'The token belonging to this token does no longer exist',
        401
      )
    );
  }
  //4. Check if user changed password after token was issues
  // if (currentUser.changedPasswordAfter(decoded.iat)) {
  //   return next(
  //     new AppError('user recently change password ! Please log in again', 401)
  //   );
  // }

  // Grand Access to protect route
  req.user = currentUser; //req.user can pass one middleware to another middleware (for authentication and Strategies)
  res.locals.user = currentUser; //pass data within the same request-response cycle (in this case, pass data to pug)
  // the base is req.locals, it named req.locals.user because it user-related information
  next();
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();

});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. Check password and email are exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  //2. Check the password and email are correct
  const user = await User.findOne({ email }).select('+password'); // + password will added password to the field but not by default

  if (!user || !(await user.correctPassword(password, user.password))) {
    //comapre postman password with in database password
    return next(new AppError('Incorrect email or password', 401));
  }
  //3. if everything ok, send token to client
  createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
  });
};

