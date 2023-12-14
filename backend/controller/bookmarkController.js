const bookmarkModel = require('../models/bookmarkModel')
const factory = require('./handleFactory')

exports.getAllVilla = factory.getAll(bookmarkModel)
exports.getUsers = factory.getOne(bookmarkModel)
exports.updateUser = factory.updateOne(bookmarkModel)
exports.deleteUser = factory.deleteOne(bookmarkModel)