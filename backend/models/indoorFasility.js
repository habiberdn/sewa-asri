const mongoose = require('mongoose')

const indoorSchema = new mongoose.Schema({
    ac: {
        type: Boolean,
        default : false
    },
    kitchen: {
        type: Boolean,
        default : false
    },
    wifi: {
        type: Boolean,
        default : false
    },
    lounge: {
        type: Boolean,
        default : false
    },
    entertainmentroom: {
        type: Boolean,
        default : false
    },
    dinningroom:{
        type: Boolean,
        default : false
    }
})

const indoorFasility = mongoose.model('indoorFasility', indoorSchema);

module.exports = indoorFasility;