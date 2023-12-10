const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const User = require('../models/userModels')
const { promisify } = require('util');
const crypto = require('crypto')

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
  try {
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
  } catch (err) {
    return next(new AppError("Email already exist!, Try another", 400));
  }
})

exports.email = async (req, res, next) => {
  const email = req.body.email;
  if (!email) {
    return next(new AppError('There is no email address.', 404));
  }
  const tokenCryp = crypto.randomBytes(32).toString('hex');
  const token = tokenCryp.substring(0, 5);
  await new Email(email, token).isEmail()
  res.status(200).json({
    status: 'success',
    email, token
  })
  res.user = {email,token}
}


exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  console.log(resetToken)
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    if (process.env.NODE_ENV == "Production") {
      const resetURL = `${req.protocol}://${req.get(
        'host'
      )}/api/v1/users/resetPassword/${resetToken}`
      await new Email(user, resetURL).sendPasswordReset();

      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!'
      });
    }
    const resetURL = `http://127.0.0.1:3000/api/v1/user/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!'
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }
});


exports.protect = catchAsync(async (req, res, next) => {
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

exports.resetPassword = catchAsync(async (req, res, next) => {
  const token = req.params.token
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  console.log(hashedToken)
  const user = await User.findOne({
    passwordResetToken: token,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  // console.log(req.body.passwordConfirm);
  await user.save();
  //3. Update changePasswordAt Property for the user

  //4.  log the user in,send the jwt
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //1. get user from collection
  const user = await User.findById(req.user.id).select('+password');

  //2. check if posted current password is correct
  if (!(await user.correctPassword(req.body.password, user.password))) {
    return next(new AppError('Password is wrong', 401)); // 401 = unauthorized
  }
  //3. if so, update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save(); // why we dont use the findByIDAndUpdate? because on the passwordConfirm, there is a validator that only work for create and save
  // so findByIDAndUpdate wont save the current object in memory

  //4. log user in,send jwt
  createSendToken(user, 200, res);
});


