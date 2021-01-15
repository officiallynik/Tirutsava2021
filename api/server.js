require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const config = require('./config/keys');
const PORT = config.port // 80 ==> nginx

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
	maxAge: 3 * 24 * 60 * 60 * 1000,
	keys: [config.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose
	.connect(config.mongoURI, { useNewUrlParser: true, useCreateIndex: true })
	.then(() => console.log("Database is Connected..."))
	.catch(err => console.log(err));

//Auth
// require('./services/auth_passport.js');

//Routes
app.get('/jsonfail', (req, res) => {
	res.send({ valid: false });
})

app.use('/api', (req, res) => {res.json({msg: "API for Tirutsava 2021"})});
app.use('/api/auth', require('./routes/auth.js'));
app.use("/api/events", require("./routes/events.js"));
// app.use("/api/queries", require("./routes/queries.js"));
// app.use("/api/seeder", require("./routes/seeder.js"));
app.use(express.static("public"));
app.use(express.static("../client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(PORT, function () {
	console.log("Server is running on Port: ", PORT);
});
