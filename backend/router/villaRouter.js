const express = require('express');
const authController = require("../controller/authController");
const villaController = require('../controller/villaController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(villaController.getAllVilla)

userRouter
    .route("/:id")
    .get(villaController.getVilla)
    .put(villaController.updateVilla)
    .delete(villaController.deleteVilla);

module.exports = userRouter;

