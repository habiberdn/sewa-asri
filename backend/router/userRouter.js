const express = require('express');
const authController = require("../controller/authController");
const userController = require('../controller/userController')
const userRouter = express.Router();


userRouter.post("/login", authController.login);
userRouter.get("/logout", authController.logout);
userRouter.post('/forgotPassword', authController.forgotPassword);
userRouter.patch('/resetPassword/:token',authController.resetPassword)

userRouter
  .route("/")
  .get(userController.getAllUsers)

userRouter
  .route("/:id")
  .get(userController.getUsers)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

userRouter.post('/signup',authController.signup);
module.exports = userRouter;
