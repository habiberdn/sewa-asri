const express = require('express');
const indoorController = require('../controller/indoorController')
const userRouter = express.Router();

userRouter.route('/').get(indoorController.getAllIndoorFasility).post(indoorController.createIndoorFasility)
