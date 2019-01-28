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
        notes: String,
        _id: false
    }]
});

const Suitcase = mongoose.model('Suitcase', SuitcaseSchema);

module.exports = Suitcase;