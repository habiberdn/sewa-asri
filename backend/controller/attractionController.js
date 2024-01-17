const attractionModel = require('../models/attractionModel')
const factory = require('./handleFactory')

exports.getAllAttraction = factory.getAll(attractionModel)
exports.getAttraction = factory.getOne(attractionModel)
exports.updateAttraction = factory.updateOne(attractionModel)
exports.deleteAttraction = factory.deleteOne(attractionModel)