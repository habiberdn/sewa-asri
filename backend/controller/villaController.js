const villaModel = require('../models/villaModels')
const factory = require('./handleFactory')

exports.getAllVilla = factory.getAll(villaModel)
exports.getUsers = factory.getOne(villaModel)
exports.updateUser = factory.updateOne(villaModel)
    exports.deleteUser = factory.deleteOne(villaModel)