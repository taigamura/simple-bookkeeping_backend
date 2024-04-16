const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const record_schema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            ref: "User"
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        date: {
            type: Date,
            index: true,
            default: Date.now
        },
        amount: {
            type: Number,
            required: true
        }
    }
);

const Record = mongoose.model('Record', record_schema);

module.exports = Record;