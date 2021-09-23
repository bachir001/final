const { model, Schema } = require('mongoose');

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 30,
        required: true,
    },
    mail: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 30,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 8,
    },
    Role: {
        type: String,
        default: "user",
    },
    Token:{
        type:String,
    },
    profilepic: String,
}, {
    collection: 'users'
});

let UserModel = model('User', UserSchema);

module.exports = UserModel;