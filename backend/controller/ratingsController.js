const reviewsModel = require('../models/reviewsModels')
const factory = require('./handleFactory')

exports.getAllVilla = factory.getAll(reviewsModel)
exports.getUsers = factory.getOne(reviewsModel)
exports.updateUser = factory.updateOne(reviewsModel)
exports.deleteUser = factory.deleteOne(reviewsModel)