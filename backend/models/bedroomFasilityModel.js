const mongoose = require('mongoose')


const bedroomFasilitySchema = new mongoose.Schema({
    window:{
        type: Boolean,
        default : false
    },
    socket:{
        type: Boolean,
        default : false
    },
    wardrobe:{
        type: Boolean,
        default : false
    }
})

const bedroomFasility = mongoose.model('BedroomFasility', bedroomFasilitySchema);

module.exports = bedroomFasility;