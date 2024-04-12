const mongoose = require('mongoose');
var uuid = require('uuid');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;