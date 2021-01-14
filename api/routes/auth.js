const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../services/auth');

// router.get('/status', (req, res) => {
// 	if (req.isAuthenticated())
// 		res.send({ loggedin: true });
// 	else
// 		res.send({ loggedin: false });
// });

router.post('/login', async (req, res) => {
	const { tokenId, googleId } = req.body;
	const verifyRes = await verifyToken(tokenId);
	// console.log(verifyRes);

	if(verifyRes[0]){
		const user = await User.findOne({googleId: googleId});
		// console.log(user);
		if(!user) {
			res.json({
				newUser: true
			});
		}
		else {
			res.json(user);
		}
	}
	else {
		res.status(400).json({ err: "google verification failed" });
	}
	
});

router.post('/register', async (req, res) => {
	const { googleId, age, institute, city, state, phone, gender } = req.body;

	try {
		const newUser = await new User({
			googleId,
			age,
			institute,
			city,
			state,
			phone,
			gender
		}).save(); 

		res.json({msg: "registration successfull", newUser});
	} 
	catch (error) {
		res.status(400).json({err: "registration failed"});
	}

});

router.get('/info/:tokenId/:googleId', async (req, res) => {
	const verifyRes = await verifyToken(req.params.tokenId);
	if(verifyRes[0]){
		const user = await User.findOne({"googleId": req.params.googleId})
		res.json(user);
	}
	else {
		res.status(400).json({err: "error authenticating"});
	}
})

// router.get('/google', passport.authenticate('google', {
// 	scope: ['profile', 'email']
// }));

// router.post('/register', loggedin, (req,res) => {
// 	var user = req.session.passport.user;
// 	// console.log("[user]", user);
// 	if(user){
// 		User.updateOne({_id: user}, {
// 			$set: {
// 				college: req.body.college,
// 				city: req.body.city,
// 				state: req.body.state,
// 				phone: req.body.phone,
// 				gender: req.body.gender,
// 				dob: req.body.dob,
// 				completedRegistration: true
// 			}
// 		})
// 		.then(u => {
// 			res.send({googleAuth: true, completedRegistration: true})
// 		})
// 		.catch(err=> res.send({googleAuth: true, completedRegistration: false}));
// 	} else {
// 		res.send({googleAuth: false});
// 	}
// });

// router.get('/logout', loggedin, (req, res) => {
// 	req.logout();
// 	res.send({ logout: true });
// });

// router.get('/dashboard', loggedin, (req, res) => {
// 	var person = {};
// 	var events = [];
// 	var user = req.session.passport.user;
// 	//("Printing User");
// 	//console.log("User : ",user);
// 	if (user.googleid) {
// 		User.findOne({ _id: user._id })
// 			.then(async nuser => {
// 				user = nuser;
// 				person.name = user.name;
// 				person.email = user.email;
// 				person.college = user.college;
// 				person.phonenum = user.phonenum;
// 				person.state = user.state;



// 				for (var i = 0; i < user.registeredeventids.length; i++) {
// 					//("In Loop");
// 					var newEvent = {};
// 					await Event.findOne({ eventId: user.registeredeventids[i] }).then(event => {
// 						//console.log("Event : ", event);
// 						newEvent.name = event.name;
// 						//("Event Found...");
// 						if (event.typeOfEvent === 1) {
// 							newEvent.type = "Technical";
// 						} else if (event.typeOfEvent === 2) {
// 							newEvent.type = "Cultural";
// 						} else if (event.typeOfEvent === 3) {
// 							newEvent.type = "Online";
// 						} else if (event.typeOfEvent === 4) {
// 							newEvent.type = "Prefest";
// 						} else if (event.typeOfEvent === 5) {
// 							newEvent.type = "Workshop";
// 						} else if (event.typeOfEvent === 6) {
// 							newEvent.type = "Informals";
// 						}
// 						newEvent.eventId = event.eventId;
// 						events.push(newEvent);
// 					})
// 						.catch(err => console.error(err));
// 				}
// 				var output = {
// 					person: person,
// 					events: events
// 				}
// 				//("Final output");
// 				//(output);
// 				res.send(output);
// 			})
// 			.catch(err => {
// 				//console.log(err);
// 			});
// 	}
// 	else {
// 		LocalUser.findOne({ _id: user._id })
// 			.then(async nuser => {
// 				user = nuser;
// 				person.name = user.name;
// 				person.email = user.email;
// 				person.college = user.college;
// 				person.phonenum = user.phonenum;
// 				person.state = user.state;

// 				//console.log("Length : ",user.registeredeventids.length);

// 				for (var i = 0; i < user.registeredeventids.length; i++) {
// 					//("In Loop");
// 					var newEvent = {};
// 					await Event.findOne({ eventId: user.registeredeventids[i] })
// 						.then(event => {
// 							newEvent.name = event.name;
// 							//("Event Found...");
// 							if (event.typeOfEvent === 1) {
// 								newEvent.type = "Technical";
// 							} else if (event.typeOfEvent === 2) {
// 								newEvent.type = "Cultural";
// 							} else if (event.typeOfEvent === 3) {
// 								newEvent.type = "Online";
// 							} else if (event.typeOfEvent === 4) {
// 								newEvent.type = "Prefest";
// 							} else if (event.typeOfEvent === 5) {
// 								newEvent.type = "Workshop";
// 							} else if (event.typeOfEvent === 6) {
// 								newEvent.type = "Informals";
// 							}
// 							newEvent.eventId = event.eventId;
// 							//("New Eevnt: ", newEvent);
// 							events.push(newEvent);
// 							//console.log("events: ", events);
// 						})
// 						.catch(err => console.error(err));
// 				}
// 				var output = {
// 					person: person,
// 					events: events
// 				}
// 				//console.log("Final output");
// 				//console.log(output);
// 				res.send(output);
// 			})
// 			.catch(err => {
// 				//console.log(err);
// 			});
// 	}

// });

// Call back Route
// router.get('/google/callback', passport.authenticate('google'), (req, res) => {
// 	// res.redirect('http://tirutsava.com/dashboard'); //'http://localhost'
// 	// console.log("[user]", req.user);
// 	res.json({
// 		completedRegistration: req.user.completedRegistration
// 	});
// });

module.exports = router;