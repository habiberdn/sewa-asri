const bedroomFasility = require('../models/bedroomFasilityModel')
const factory = require('./handleFactory')

exports.getAllBedroomFasility = factory.getAll(bedroomFasility)
exports.getBedroomFasility = factory.getOne(bedroomFasility)
exports.updateBedroomFasility = factory.updateOne(bedroomFasility)
exports.deleteBedroomFasility = factory.deleteOne(bedroomFasility)