const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    trips : [{
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;