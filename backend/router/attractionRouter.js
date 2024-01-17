const express = require('express');
const attractionController = require('../controller/attractionController')
const userRouter = express.Router();

userRouter.route('/').get(attractionController.getAllAttraction).post(attractionController.createAttraction)
