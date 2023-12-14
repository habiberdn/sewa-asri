const express = require('express');
const authController = require("../controller/authController");
const villaController = require('../controller/villaController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(villaController.getAllUsers)

userRouter
    .route("/:id")
    .get(villaController.getUsers)
    .put(villaController.updateUser)
    .delete(villaController.deleteUser);
