const bathroomModel = require('../models/bathroomModel')
const factory = require('./handleFactory')

exports.getAllbathroom = factory.getAll(bathroomModel)
exports.getbathroom = factory.getOne(bathroomModel)
exports.updatebathroom = factory.updateOne(bathroomModel)
exports.deletebathroom = factory.deleteOne(bathroomModel)
exports.createbathroom = factory.createOne(bathroomModel)
