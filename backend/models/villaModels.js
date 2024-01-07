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
        required: [true, 'A user must have a bedroom'],
        min: [1, 'bedroomQuantity must be above 1'],
    },
    bathroomQuantity:{
        type:Number,
        required: [true, 'A user must have a bethroom'],
        min: [1, 'bathroomQuantity must be above 1'],
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