const express = require('express');
const outdoorController = require('../controller/outdoorController')
const userRouter = express.Router();

userRouter.route('/').get(outdoorController.getAlloutdoorfasility).post(outdoorController.createoutdoorfasility)
