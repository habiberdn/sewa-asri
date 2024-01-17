const outdoorfasilityModels = require('../models/outdoorfasility')
const factory = require('./handleFactory')

exports.getAlloutdoorfasility = factory.getAll(outdoorfasilityModels)
exports.getoutdoorfasility = factory.getOne(outdoorfasilityModels)
exports.updateoutdoorfasility = factory.updateOne(outdoorfasilityModels)
exports.deleteoutdoorfasility = factory.deleteOne(outdoorfasilityModels)
exports.createoutdoorfasility = factory.createOne(outdoorfasilityModels)
