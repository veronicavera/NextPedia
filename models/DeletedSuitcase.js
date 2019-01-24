const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeletedSuitcaseSchema = new Schema({
    originalId: Schema.Types.ObjectId,
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
    }]
});

const DeletedSuitcase = mongoose.model('DeletedSuitcase', DeletedSuitcaseSchema);

module.exports = DeletedSuitcase;