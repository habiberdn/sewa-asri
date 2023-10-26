const express = require("express");
const userController = require("../controller/authController");
const userRouter = express.Router();

userRouter
  .route("/user")
  .get(userController.getAllUser)
  .post(userController.checkEmail,userController.Register);

userRouter.route('/user/:email',).get(userController.getOneUser)

userRouter.post("/login", userController.login);
userRouter.get("/logout", userController.logout);
userRouter.post('/forgotPassword', userController.forgetPassword);
userRouter.patch('/resetPassword',userController.resetPassword)

userRouter
  .route("/:email")
  .get(userController.getOneUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
