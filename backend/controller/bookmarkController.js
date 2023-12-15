const bookmarkModel = require('../models/bookmarkModel')
const factory = require('./handleFactory')

exports.getAllBookmark = factory.getAll(bookmarkModel)
exports.getBookmark = factory.getOne(bookmarkModel)
exports.updateBookmark= factory.updateOne(bookmarkModel)
exports.deleteBookmark = factory.deleteOne(bookmarkModel)