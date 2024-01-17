const mongoose = require('mongoose')


const fasilitySchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Fasility must have a name']
    },
    status:{
        type:Boolean,
        default : true
    }
})

const fasility = mongoose.model('Fasility', fasilitySchema);

module.exports = fasility;
