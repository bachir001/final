const { model, Schema } = require('mongoose');

const SubscriberSchema = new Schema({

    subsname: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 20,
        required: true,
    },
    subsmail: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 30,
        required: true,
        lowercase: true,
    },
    iduser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    collection: 'subscribers'
});

const SubscriberModel = model('Subscriber', SubscriberSchema);
module.exports = SubscriberModel;