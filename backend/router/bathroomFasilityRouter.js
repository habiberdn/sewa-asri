const express = require('express');
const bathroomFasilityController = require('../controller/bathroomFasilityController')
const userRouter = express.Router();

userRouter.route('/').get(bathroomFasilityController.getAllbathroomFasility).post(bathroomFasilityController.createbathroomFasility)
