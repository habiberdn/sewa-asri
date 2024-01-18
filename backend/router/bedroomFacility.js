const express = require('express');
const bedroomFasilityController = require('../controller/bedroomFacilityController')
const userRouter = express.Router();

userRouter.route('/').get(bedroomFasilityController.getAllBedroomFasility).post(bedroomFasilityController.createBedroomFasility)
