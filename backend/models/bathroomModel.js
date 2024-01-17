const mongoose = require('mongoose')

const bathroomSchema = new mongoose.Schema({
    quantity: {
        type: Number,
    },
    otherFasility: {
        type: mongoose.Schema.ObjectId,
        ref: 'BathroomFasility',
    }
})


const bathroom = mongoose.model('Bathroom', bathroomSchema);
module.exports = bathroom;