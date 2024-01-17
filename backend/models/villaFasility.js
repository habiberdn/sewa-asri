const mongoose = require('mongoose')

const villaFasilitySchema = new mongoose.Schema({
    indoor :{
        type:mongoose.Schema.ObjectId,
        ref:'IndoorFasility',
    },
    outdoor:{
        type:mongoose.Schema.ObjectId,
        ref:'OutdoorFasility',
    }
})

const villaFasility = mongoose.model('FasilityVilla', villaFasilitySchema);

module.exports = villaFasility;