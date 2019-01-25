const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeletedTripSchema = new Schema({
    originalId: Schema.Types.ObjectId,
    tripName: {
        type: String,
        required: true
    },
    startLocation: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    startFlightTakeOffTime: {
        type: String,
        required: true
    },
    endLocation: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    endFlightTakeOffTime: {
        type: String,
        required: true
    },
    roundTrip: {
        type: Boolean,
        required: true
    },
    // weatherInfo: {

    // },
    suitcases : {
        type: Schema.Types.ObjectId,
        ref: 'Suitcase'
    }
});

const DeletedTrip = mongoose.model('DeletedTrip', DeletedTripSchema);

module.exports = DeletedTrip;