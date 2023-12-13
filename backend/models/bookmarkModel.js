const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    VillaId:{
        ref:'Villa',
        type:mongoose.Schema.ObjectId,
        require:[true,'Bookmark must belong to a Villa'],
    }
})

const bookmark = mongoose.model('Bookmark', userSchema);

module.exports = bookmark;