const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuitcaseSchema = new Schema({
    items: [{
        type: String,
        required: true
    }],
    quantities: [{
        type: Number,
        required: true
    }]
});

const Suitcase = mongoose.model('Suitcase', SuitcaseSchema);

module.exports = Suitcase;