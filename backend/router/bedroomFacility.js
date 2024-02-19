const express = require('express');
const bedroomFasilityController = require('../controller/bedroomFacilityController')
const userRouter = express.Router();

userRouter.route('/').get(bedroomFasilityController.getAllBedroomFasility).post(bedroomFasilityController.createBedroomFasility)

userRouter.route('/:id').patch(bedroomFasilityController.updateBedroomFasility).delete(bedroomFasilityController.deleteBedroomFasility)




module.exports = userRouter