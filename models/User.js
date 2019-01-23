const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true,
        unique: true
    },
    urlLink: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;