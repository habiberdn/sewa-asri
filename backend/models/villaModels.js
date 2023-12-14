const mongoose = require('mongoose')


const villaSchema = new mongoose.Schema({
    image : {
        type:String
    },
    name :{
        type:String,
        required: [true, 'A user must have a name'],
        maxlength: [40, 'A tour name must have less or equal then 40 characters'],
        minlength: [10, 'A tour name must have more or equal then 10 characters'],
    },
    price :{
        type:Number,

    },
    bedroomQuantity:{
        type:Number,

    },
    bathroomQuantity:{
        type:Number,
    },
    bookmarkId:{
        type:mongoose.Schema.ObjectId,
        ref:'Bookmark',
    },
    ratings :{
        type:mongoose.Schema.ObjectId,
        ref:'Review',
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const villa = mongoose.model('Villa', villaSchema);

module.exports = villa;