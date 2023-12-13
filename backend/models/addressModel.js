const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   city:{
    type:String,
    required: [true, 'A address must have a city'],
   },
   detail:{
    type:String,
   }
})


const address = mongoose.model('Address', userSchema);
module.exports = address;