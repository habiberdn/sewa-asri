const mongoose = require('mongoose')

const bathroomFasilitySchema = new mongoose.Schema({
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


const bathroomFasility = mongoose.model('BathroomFasility', bathroomFasilitySchema);
module.exports = bathroomFasility;