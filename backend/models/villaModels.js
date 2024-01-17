const mongoose = require('mongoose')

const villaSchema = new mongoose.Schema({
    name :{
        type:String,
        required: [true, 'A user must have a name'],
        maxlength: [40, 'A tour name must have less or equal then 40 characters'],
        minlength: [10, 'A tour name must have more or equal then 10 characters'],
    },
    price :{
        type:Number,
    },
    image : [String],
    bedroom:{
        type:mongoose.Schema.ObjectId,
        ref:'Bedroom',
    },
    bathroom:{
        type:mongoose.Schema.ObjectId,
        ref:'Bathroom',
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
    },
    fasility:{
        type:mongoose.Schema.ObjectId,
        ref:'FasilityVilla',
    },
    location :{
        type:mongoose.Schema.ObjectId,
        ref:'Location',
    },
    attraction :{
        type:mongoose.Schema.ObjectId,
        ref:'Attraction',
    },
    isAvailable:{
        type: Boolean,
        default : true 
    }

})

const villa = mongoose.model('Villa', villaSchema);

module.exports = villa;

//location(model), isAvailable, bedroom(model),bathroom,fasility,attraction