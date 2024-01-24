const mongoose = require('mongoose')


const bedroomSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        require:[true,'mush have at least 1 bedroom']
    },
    width:{
        type:Number,
        require:[true,'mush have width']
    },
    length:{
        type:Number,
        require:[true,'mush have length']
    },
    bedsize:{
        type:String,
        require:[true,'mush have bedsize'],
        default: "Single Bed"
    },
    othersFasility:{
        type:mongoose.Schema.ObjectId,
        ref:'BedroomFasility',
    }
})

const bedroom = mongoose.model('Bedroom', bedroomSchema);

module.exports = bedroom;