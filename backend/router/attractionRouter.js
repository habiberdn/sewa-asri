const express = require('express');
const attractionController = require('../controller/attractionController')
const userRouter = express.Router();

userRouter.route('/').get(attractionController.getAllAttraction).post(attractionController.uploadUserPhoto, attractionController.resizeUserPhoto, attractionController.createAttraction)
userRouter.route('/:id').patch(attractionController.updateAttraction).delete(attractionController.deleteAttraction)
module.exports = userRouter;
