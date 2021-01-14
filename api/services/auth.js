const config = require('../config/keys');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(config.googleClientID);

const verifyToken = async (tokenId) => {
    try {
        const res = await client.verifyIdToken({ idToken: tokenId });
        return [true, res.getPayload()]
    } catch (error) {
        return [false, {err: "token verification failed"}];
    }
}

module.exports = verifyToken;