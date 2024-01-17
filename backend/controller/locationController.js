const locationModels = require('../models/locationModels')
const factory = require('./handleFactory')

exports.getAllLocation = factory.getAll(locationModels)
exports.getLocation = factory.getOne(locationModels)
exports.updateLocation = factory.updateOne(locationModels)
exports.deleteLocation = factory.deleteOne(locationModels)