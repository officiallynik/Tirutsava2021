const mongoose = require('mongoose');

const MerchSchema = mongoose.Schema({
	googleId: {
        type: String
    },
    paymentStatus: {
        type: String
    }
})

module.exports = mongoose.model('merchpurchases', MerchSchema);