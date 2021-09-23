const { model, Schema } = require('mongoose');

const ShopSchema = new Schema({
    
    shopname: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 20,
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
        maxLength: 20,
        unique: true,
        required: true,
    },
    shopadder: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    collection:'shops'
});

const ShopModel = model('Shop', ShopSchema);
module.exports = ShopModel;