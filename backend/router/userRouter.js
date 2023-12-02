const express = require('express');
const authController = require("../controller/authController");
const userController = require('../controller/userController')
const userRouter = express.Router();


userRouter.post('/signup', authController.signup);
// userRouter.route('/:email',).get(userController.getUsers)

userRouter.post("/login", authController.login);
userRouter.get("/logout", authController.logout);
userRouter.post('/forgotPassword', authController.forgotPassword);
userRouter.patch('/resetPassword/:token',authController.resetPassword)
// userRouter.use(authController.protect);
userRouter
  .route("/")
  .get(userController.getAllUsers)

userRouter
  .route("/:id")
  .get(userController.getUsers)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
