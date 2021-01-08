const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    dob: {
        type: String
    },
    institute: {
        type: String,
        default: 'NA'
    },
    city: {
        type: String,
        default: 'NA'
    },
    state: {
        type: String,
        default: 'NA'
    },
    phone: {
        type: String,
        default: 'NA'
    },
    registeredeventids: {
        type: Array,
        default: []
    },
    gender: {
        type: String,
        default: 'NA'
    }
});

module.exports = mongoose.model('users', UserSchema);