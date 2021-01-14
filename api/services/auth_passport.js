const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        // console.log("[Profile]", profile);

        const existingUser = await User.findOne({ googleId: profile.id });

        if(existingUser) {
            return done(null, existingUser);
        }

        const newUser = await new User({
            googleId: profile.id,
            name: profile._json.name,
            email: profile._json.email
        }).save(); 

        done(null, newUser);
    }
));