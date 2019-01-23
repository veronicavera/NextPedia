const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    Trip: {
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

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;