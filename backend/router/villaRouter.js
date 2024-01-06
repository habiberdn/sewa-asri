const express = require('express');
const authController = require("../controller/authController");
const villaController = require('../controller/villaController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(villaController.getAllVilla)

userRouter.use(authController.restrictTo('manager')) 
userRouter
    .route("/:id")
    .get(villaController.getVilla)
    .post(villaController.createVilla)
    .patch(villaController.updateVilla)
    .delete(villaController.deleteVilla);

module.exports = userRouter;

