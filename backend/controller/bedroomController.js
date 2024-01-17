const bedroomModel = require('../models/bedroomModel')
const factory = require('./handleFactory')

exports.getAllBedroom = factory.getAll(bedroomModel)
exports.getBedroom = factory.getOne(bedroomModel)
exports.updateBedroom = factory.updateOne(bedroomModel)
exports.deleteBedroom = factory.deleteOne(bedroomModel)