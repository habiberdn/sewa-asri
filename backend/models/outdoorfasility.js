const mongoose = require('mongoose')

const outdoorSchema = new mongoose.Schema({
    pool: {
        type: Boolean,
        default : false
    },
    garage: {
        type: Boolean,
        default : false
    },
    security: {
        type: Boolean,
        default : false
    },
    park: {
        type: Boolean,
        default : false
    },
    bbqarea: {
        type: Boolean,
        default : false
    }
})

const outdoorFasility = mongoose.model('outdoorFasility', outdoorSchema);

module.exports = outdoorFasility;