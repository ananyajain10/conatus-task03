const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    bio: {
        type: String,
        required: true,
        default: null
        
    },

    links: {
        type: Array,
        required: true
    },

    isDeleted: {
        type: String,
        default: false,
    },
    fcmToken: {
        type: String,
        default: null,
    },

    token: {
        type: String,
        default: null
    }


});

const ChannelModel = mongoose.model('Channel', channelSchema);

module.exports = ChannelModel