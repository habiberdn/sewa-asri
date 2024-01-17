const mongoose = require('mongoose')

const attractionSchema = new mongoose.Schema({
    photo:{
        type:String,
    },
    name : {
        type:String,
    },
    open : {
        type:String,
    },
    close : {
        type:String,
    },
    distance : {
        type:String,
    }
})

const attraction = mongoose.model('Location', attractionSchema);

module.exports = attraction;