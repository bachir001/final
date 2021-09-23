const { model, Schema } = require('mongoose');

const ContactSchema = new Schema({
    
    sendername: {
        type: String,
        trim: true,
        maxLength: 30,
        required: true,
    },
    title: {
        type: String,
        maxLength: 30,
        required: true,
    },
    sendermail: {
        type: String,
        trim: true,
        maxLength: 30,
        required: true,
        lowercase: true,
    },
    description : {
        type: String,
        maxLength: 200,
        required: true,
    }
}, {
    collection:'contacts'
});

const ContactModel = model('Contact', ContactSchema);
module.exports = ContactModel;