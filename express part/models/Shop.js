const { model, Schema } = require('mongoose');

const ShopSchema = new Schema({

    shopname: {
        type: String,
        unique: true,
        maxLength: 30,
        required: true,
    },
    locationInfo: {
        type: String,
        maxLength: 200,
        required: true,
    },
    phonenumber: {
        type: Number,
        trim: true,
        maxLength: 8,
        unique: true,
        required: true,
    },
    shopadder: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    shopimg: {
        type: String,
        required: true,
    },
    accept: {
        type: String,
        default: "no",
    }

}, {
    collection: 'shops'
});

const ShopModel = model('Shop', ShopSchema);
module.exports = ShopModel;