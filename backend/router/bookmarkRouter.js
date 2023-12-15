const express = require('express');
const authController = require("../controller/authController");
const bookmarkController = require('../controller/bookmarkController')
const userRouter = express.Router();

userRouter.use(authController.protect)
userRouter
    .route("/")
    .get(bookmarkController.getAllBookmark)

userRouter
    .route("/:id")
    .get(bookmarkController.getBookmark)
    .put(bookmarkController.updateBookmark)
    .delete(bookmarkController.deleteBookmark);

module.exports = userRouter;
