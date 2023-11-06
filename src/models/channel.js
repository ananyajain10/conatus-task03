const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 5,
        max: 10
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 50
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8,
        max: 15
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,

        max: 254,

        validate: {
            validator: function (value) {

                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            },
            message: 'Invalid email format'
        }
    },



    bio: {
        type: String,
        required: true,
        default: null

    },



});

const ChannelModel = mongoose.model('Channel', channelSchema);

module.exports = ChannelModel