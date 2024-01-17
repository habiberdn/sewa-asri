const indoorFasilityModel = require('../models/indoorFasility')
const factory = require('./handleFactory')

exports.getAllIndoorFasility = factory.getAll(indoorFasilityModel)
exports.getIndoorFasility = factory.getOne(indoorFasilityModel)
exports.updateIndoorFasility = factory.updateOne(indoorFasilityModel)
exports.deleteIndoorFasility = factory.deleteOne(indoorFasilityModel)
exports.createIndoorFasility = factory.createOne(indoorFasilityModel)
