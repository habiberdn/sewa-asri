const express = require('express');
const bathroomFasilityController = require('../controller/bathroomFacilityController')
const userRouter = express.Router();

userRouter.route('/').get(bathroomFasilityController.getAllbathroomFasility).post(bathroomFasilityController.createbathroomFasility)
module.exports = userRouter;
