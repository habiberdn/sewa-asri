const villaModel = require('../models/villaModels')
const factory = require('./handleFactory')

exports.getAllVilla = factory.getAll(villaModel)
exports.getVilla = factory.getOne(villaModel)
exports.updateVilla = factory.updateOne(villaModel)
exports.deleteVilla = factory.deleteOne(villaModel)
exports.createVilla = factory.createOne(villaModel)