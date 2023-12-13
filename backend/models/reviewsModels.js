const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required: [true, 'A review must have a rating'],

    },
    average : {
        type:Number,
        required: [true, 'A review must have a average'],
       
    },
    total:{
        type:Number,
        required: [true, 'A review must have a total'],

    }   
})


const review = mongoose.model('Review', userSchema);
module.exports = review;