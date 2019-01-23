const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuitcaseSchema = new Schema({
    Suitcase: {
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

const Suitcase = mongoose.model('Suitcase', SuitcaseSchema);

module.exports = Suitcase;