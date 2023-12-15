const express = require('express');
const authController = require("../controller/authController");
const ratingsController = require('../controller/ratingsController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(ratingsController.getAllRatings)

userRouter
    .route("/:id")
    .get(ratingsController.getRating)
    .put(ratingsController.updateRating)
    .delete(ratingsController.deleteRating);

// Filtering 
module.exports = userRouter;
