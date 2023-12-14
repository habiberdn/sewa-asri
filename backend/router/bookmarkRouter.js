const express = require('express');
const authController = require("../controller/authController");
const bookmarkController = require('../controller/bookmarkController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(bookmarkController.getAllUsers)

userRouter
    .route("/:id")
    .get(bookmarkController.getUsers)
    .put(bookmarkController.updateUser)
    .delete(bookmarkController.deleteUser);
