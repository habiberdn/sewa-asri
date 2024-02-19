const express = require('express');
const bedroomController = require('../controller/bedroomController')
const userRouter = express.Router();

userRouter.route('/').get(bedroomController.getAllBedroom).post(bedroomController.createBedroom)
userRouter.route('/:id').patch(bedroomController.updateBedroomFasility).delete(bedroomController.deleteBedroomFasility)
module.exports = userRouter
