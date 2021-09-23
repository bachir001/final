const { model, Schema } = require('mongoose');

const ReviewSchema = new Schema({

    description: {
        type: String,
        maxLength: 200,
        required: true,
    },
    rating: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 30,
        required: true,
    },
    idr: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ids: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required: true,
    }
}, {
    collection: 'reviews'
});

let ReviewModel = model('Review', ReviewSchema);

module.exports = ReviewModel;