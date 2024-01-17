const express = require('express');
const addressController = require('../controller/addressController')
const userRouter = express.Router();

userRouter.route('/').get(addressController.getAllAddress).post(addressController.createAddress)
