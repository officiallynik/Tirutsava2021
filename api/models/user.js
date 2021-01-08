const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    completedRegistration: {
        type: Boolean,
        default: false
    },
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date
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