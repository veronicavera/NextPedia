const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeletedSuitcaseSchema = new Schema({
    originalId: Schema.Types.ObjectId,
    items: [{
        type: String,
        required: true
    }],
    quantities: [{
        type: Number,
        required: true
    }]
});

const DeletedSuitcase = mongoose.model('DeletedSuitcase', DeletedSuitcaseSchema);

module.exports = DeletedSuitcase;