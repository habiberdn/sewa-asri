const mongoose = require('mongoose')
const villaModel = require('./villaModels')

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, 'A review must have a rating'],
    },
    average: {
        type: Number,
        required: [true, 'A review must have a average'],

    },
    total: {
        type: Number,
        required: [true, 'A review must have a total'],
    },
    villa: { type: mongoose.Types.ObjectId, ref: "Villa" }
})
reviewSchema.static.calcAverage = async function (villaId) {
    const stats = await this.aggregate([
        {
            $match: { villa: villaId },
        },
        {
            $group: {
                _id: '$villa',
                nRating: { $sum: 1 },
                avgRating: { $avg: '$rating' },
            },
        },
    ]);
    if (stats) {
        await villaModel.findByIdAndUpdate(villaId, {
            total: stats[0].nRating,
            average: stats[0].avgRating,
        });
    } else {
        await villaModel.findByIdAndUpdate(tourId, {
            total: 0,
            average: 4.5,
        });
    }
}
        
reviewSchema.post('save', function () {
    //this point to current review, for implement the static function
    this.constructor.calcAverageRatings(this.tour);
  });
  

const review = mongoose.model('Review', reviewSchema);
module.exports = review;