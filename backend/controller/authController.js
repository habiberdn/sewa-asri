const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const moment = require("moment-timezone");

const signToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
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

exports.getAllUser = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      status: "Success",
      users,
    });
    createSendToken(users, 201, res);
  } catch (err) {
    console.log(err);
  }
};

exports.Register = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashPassword,
      },
    });
    // await new Email(newUser, url).sendWelcome();
    createSendToken(user, 201, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

exports.checkEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const emailDb = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!email || !emailDb) {
    return next();
  }
  if (email === emailDb.email) {
    res.status(400).json({
      error: "Email already exist",
    });
    return next(new AppError("Email already exist", 400));
  }
  next();
});

async function createPasswordResetToken(email) {
  const resetToken = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const now = new Date(Date.now() + 10 * 60 * 1000 + 3600 * 7 * 1000);

  console.log(now);
  try {
    await prisma.user.update({
      where: { email: email },
      data: {
        passwordResetToken: hashedToken,
        passwordResetExpires: now,
      },
    });
  } catch (err) {
    console.log(err);
  }

  return hashedToken;
}

exports.forgetPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  try {
    // Find the user by their email
    const emailDb = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Check if the user exists
    if (!emailDb) {
      return next(new AppError("Email doesn't exist", 400));
    }

    // Call the createPasswordResetToken function
    const resetToken = await createPasswordResetToken(emailDb.email);

    if (resetToken) {
      // Construct the reset URL
      const Token = `${resetToken}`;

      // Send the reset email using your Email class or function
      await new Email(emailDb, Token).sendPasswordReset();

      res.status(200).json({
        status: "success",
        message: "Token sent to email!",
      });
    } else {
      console.log("Tokennya kosong bang");
    }
  } catch (err) {
    // Handle errors, reset the user's data if necessary
    console.log(err);

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  try {
    const passwordDb = await prisma.user.findMany({
      where: {
        email: email,
      },
    });

    if (!passwordDb) {
      return next(new AppError('Token is invalid or has expired', 400));
    }

    const { password } = req.body;
    console.log(password);
    const hashPassword = await bcrypt.hash(password, 10);

    const update = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: hashPassword,
        passwordResetToken: undefined,
        passwordResetExpires: undefined,
      },
    });
    
    createSendToken(update, 200, res);
  } catch (err) {
    console.log(err);
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. Check password and email are exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  console.log(user);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
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

exports.getOneUser = async (req, res, next) => {
  console.log(req.params.email);
  const getUser = await prisma.user.findUnique({
    where: {
      email: req.params.email,
    },
  });
  if (!getUser) {
    return next(new AppError("No Tour found in that ID", 404));
  }

  res.status(200).json({
    status: "success",
    getUser,
  });
};

exports.updateUser = async (req, res, next) => {
  const updateUser = await prisma.user.update({
    where: {
      email: req.params.email,
    },
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (!updateUser) {
    return next(new AppError("No Tour found in that ID", 404));
  }

  res.status(200).json({
    status: "success",
    getUser,
  });
};

exports.deleteUser = async (req, res, next) => {
  const deleteUser = await prisma.user.delete({
    where: {
      email: req.params.email,
    },
  });

  res.status(204).json({
    status: "Success",
    deleteUser,
  });
};
