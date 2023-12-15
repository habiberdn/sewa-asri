const reviewsModel = require('../models/reviewsModels')
const factory = require('./handleFactory')

exports.getAllRatings = factory.getAll(reviewsModel)
exports.getRating = factory.getOne(reviewsModel)
exports.updateRating = factory.updateOne(reviewsModel)
exports.deleteRating = factory.deleteOne(reviewsModel)