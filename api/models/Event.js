const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	typeOfEvent: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	participants: {
		type: Array,
		default: []
	},
	entryFee: {
		type: Number,
		required: true
	},
	eventTime: {
		type: String,
		default: ""
	},
	registrationClose: {
		type: String,
		default: null
	},
	submissionMail: {
		type: String,
		default: ""
	},
	eventPrize: {
		type: Array,
		default: []
	},
	maxParticipants: {
		type: Number,
		default: 1
	},
	registrationLink: {
		type: String
	},
	registrationOpen: {
		type: Boolean,
		default: false
	},
	links: {
		type: Array,
		default: []
	},
	redirectRegistrationUrl: {
		type: String,
		default: null
	}
});

module.exports = mongoose.model('events', EventSchema);
