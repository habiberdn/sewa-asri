const express = require('express');
const locationController = require('../controller/locationController')
const userRouter = express.Router();

userRouter.route('/').get(locationController.getAllLocation).post(locationController.createLocation)
