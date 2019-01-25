const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuitcaseSchema = new Schema({
    items: [{ 
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        _id: false
    }],
    notes: String
});

const Suitcase = mongoose.model('Suitcase', SuitcaseSchema);

module.exports = Suitcase;