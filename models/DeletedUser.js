const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeletedUserSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    trips : [{
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }]
});

const DeletedUser = mongoose.model('DeletedUser', DeletedUserSchema);

module.exports = DeletedUser;