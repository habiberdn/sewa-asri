const express = require('express');
const bedroomController = require('../controller/bedroomController')
const userRouter = express.Router();

userRouter.route('/').get(bedroomController.getAllBedroom).post(bedroomController.createBedroom)

module.exports = userRouter
