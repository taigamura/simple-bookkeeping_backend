const mongoose = require('mongoose');
const User = require('./user.model');
const Schema = mongoose.Schema;

const record_schema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            ref: User
        },
        date: {
            type: Date,
            index: true,
            default: Date.now
        },
        category: [{
            type: String
        }]
    }
);

const Record = mongoose.model('Record', record_schema);

module.exports = Record;