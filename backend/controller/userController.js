const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AppError = require('../utils/appError')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");

const signToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRED_IN,
    });
  };
  
  const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOption = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, //receive cookie,store it, send it automatically alomg every request
    };
    if (process.env.NODE_ENV === 'Production') cookieOption.secure = true;
    //remove password from the output
    user.password = undefined;
  
    res.cookie('jwt', token, cookieOption);
  
    res.status(statusCode).json({
      status: 'Success',
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
    createSendToken(users,201,res)
  } catch (err) {
    console.log();
  }
};

exports.Register = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
   
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashPassword
      },
      
    });
    createSendToken(user,201,res)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

exports.login =async (req,res,next)=>{
  const { email, password } = req.body;

  //1. Check password and email are exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  console.log(user)
  if (!user || !await bcrypt.compare(password,user.password)){
    return next(new AppError('Incorrect email or password', 401));
  }
  createSendToken(user, 200, res);
}

exports.logout = (req,res)=>{
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
  });
}

exports.getOneUser =async (req,res,next)=>{
    const getUser = await prisma.user.findUnique({
        where: {
          email: req.params.email
        },
      })
    if (!getUser) {
        return next(new AppError('No Tour found in that ID', 404));
      }

    res.status(200).json({
        status:'success',
        getUser
    })
}

exports.updateUser =async (req,res,next)=>{
    const updateUser = await prisma.user.update({
        where: {
          email: req.params.email
        },
        data:{
          email: req.body.email,
          password:req.body.password
            
        }
      })
    if (!updateUser) {
        return next(new AppError('No Tour found in that ID', 404));
      }

    res.status(200).json({
        status:'success',
        getUser
    })
}

exports.deleteUser = async(req,res,next)=>{
    const deleteUser = await prisma.user.delete({
        where:{
            email:req.params.email
        }
    })

    res.status(204).json({
        status:"Success",
        deleteUser
    })
}