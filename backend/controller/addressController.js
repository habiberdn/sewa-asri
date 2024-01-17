const addressModel = require('../models/addressModel')
const factory = require('./handleFactory')

exports.getAllAddress = factory.getAll(addressModel)
exports.getAddress = factory.getOne(addressModel)
exports.updateAddress = factory.updateOne(addressModel)
exports.deleteAddress = factory.deleteOne(addressModel)