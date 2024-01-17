const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    city:{
        type:String,
        require : [true,'must have a name of the city']
    },
    address : {
        type:String,
        require : [true,'must have a name of the address']
    }
})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;