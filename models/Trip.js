const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    tripName: {
        type: String,
        required: true
    },
    takeOffTime: {
        type: String,
        required: true
    },
    takeOffDate: {
            type: Date,
            required: true
    },
    takeOffAirport: {
            type: String,
            required: true
    },
    landingTime: {
        type: String,
        required: true
    },
    landingDate: {
            type: Date,
            required: true
    },
    landingAirport: {
            type: String,
            required: true
    },
    suitcases : {
        type: Schema.Types.ObjectId,
        ref: 'Suitcase'
    }
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;