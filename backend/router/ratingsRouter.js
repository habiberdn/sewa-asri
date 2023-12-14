const express = require('express');
const authController = require("../controller/authController");
const ratingsController = require('../controller/ratingsController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(ratingsController.getAllUsers)

userRouter
    .route("/:id")
    .get(ratingsController.getUsers)
    .put(ratingsController.updateUser)
    .delete(ratingsController.deleteUser);

// Filtering 