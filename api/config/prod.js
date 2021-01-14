// prod.js - production keys here!!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    port: process.env.PORT || 80,
    instaAPIKey: process.env.instaAPIKey,
    instaAuthKey: process.env.instaAuthKey,
    sheetClientEmail: process.env.sheetClientEmail,
    sheetPrivateKey: process.env.sheetPrivateKey
};  