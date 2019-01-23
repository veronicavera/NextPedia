const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuitcaseSchema = new Schema({
    suitcaseId: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Suitcase = mongoose.model('Suitcase', SuitcaseSchema);

module.exports = Suitcase;