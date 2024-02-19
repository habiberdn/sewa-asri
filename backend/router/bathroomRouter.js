const express = require('express');
const bathroomController = require('../controller/bathroomController')
const userRouter = express.Router();

userRouter.route('/').get(bathroomController.getAllbathroom).post(bathroomController.createbathroom)

userRouter.route('/:id').patch(bathroomController.updateBedroomFasility).delete(bathroomController.deleteBedroomFasility)

module.exports = userRouter;
