const bathroomFasilityModel = require('../models/bathroomFasility')
const factory = require('./handleFactory')

exports.getAllbathroomFasility = factory.getAll(bathroomFasilityModel)
exports.getbathroomFasility = factory.getOne(bathroomFasilityModel)
exports.updatebathroomFasility = factory.updateOne(bathroomFasilityModel)
exports.deletebathroomFasility = factory.deleteOne(bathroomFasilityModel)
exports.createbathroomFasility = factory.createOne(bathroomFasilityModel)
