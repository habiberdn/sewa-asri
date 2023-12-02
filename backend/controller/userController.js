const User = require('../models/userModels')
const factory = require('./handleFactory')

exports.getAllUsers =factory.getAll(User)
exports.getUsers = factory.getOne(User)
//do not change password
exports.updateUser = factory.updateOne(User)

exports.deleteUser = factory.deleteOne(User)