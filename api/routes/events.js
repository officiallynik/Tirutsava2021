const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Event = require('../models/Event');
const verifyToken = require('../services/auth');

const Insta = require('instamojo-nodejs');
const url = require('url');
const config = require('../config/keys');

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

const sheetIds = {
	"prefest": "1v4gDVCLG5x7O7EsEQrX1ZgK6JP7TJVWs7K5TNITcESw"
}

router.get('/type/:id', (req, res) => {

	const typeId = +req.params.id;
	// console.log("finding...")

	switch (typeId) {
		case 0:
			// console.log("pre fest");
			Event.find({ "typeOfEvent": "Pre Fest" })
				.then((events) => {
					// console.log(events);
					res.json(events);
				});
			break;

		case 1:
			Event.find({ "typeOfEvent": "Workshops" })
				.then((events) => res.json(events));
			break;

		case 2:
			Event.find({ "typeOfEvent": "Cultural" })
				.then((events) => res.json(events));
			break;

		case 3:
			Event.find({ "typeOfEvent": "Technical" })
				.then((events) => res.json(events));
			break;

		case 4:
			Event.find({ "typeOfEvent": "Literary" })
				.then((events) => res.json(events));
			break;

		default:
			return res.json([]);
	}
});

router.get('/event/:id', (req, res) => {
	Event.findOne({ "_id": req.params.id })
		.then((event) => res.json(event))
		.catch((err) => {
			throw err;
		});
});

const editSpreadSheet = async ({ sheetId, sheetNb, name, email, phonenumber, timeline, eventId, eventType }) => {
	console.log(eventType)
	const doc = new GoogleSpreadsheet(sheetIds[eventType]);

	await doc.useServiceAccountAuth({
		client_email: config.sheetClientEmail,
		private_key: config.sheetPrivateKey,
	});

	await doc.loadInfo();
	// console.log(doc.title);
	const sheet = doc.sheetsByIndex[sheetNb];

	// console.log(sheet.title);

	const newRowCreated = await sheet.addRow([timeline, name, email, phonenumber, eventId]);

	await newRowCreated.save();
}

const registerFreeEvent = async ({ res, phonenumber, name, email, eventNo, eventType, eventName, eventId, googleId }) => {
	
	const event = await Event.findOne({ "_id": eventId })
	event.participants.push(googleId);
	const updatedEvent = await event.save();

	const user = await User.findOne({ "googleId": googleId })
	user.registeredeventids.push(eventId);
	const updatedUser = await user.save();

	await editSpreadSheet({
		sheetNb: eventNo,
		name: name,
		email: email,
		phonenumber: phonenumber,
		timeline: new Date().toLocaleString(),
		eventId: eventId,
		eventType:eventType
	});

	res.json({
		msg: "registration successfull",
		eventType,
		eventName: eventName.replace("%20", " "),
		eventId
	})
}

const registerEvent = ({ purpose, amount, buyer_name, email, phone, redirectUrl, res }) => {

	// console.log(redirectUrl);

	Insta.setKeys(config.instaAPIKey, config.instaAuthKey);

	const data = new Insta.PaymentData();
	// Insta.isSandboxMode(true);

	data.purpose = purpose;
	data.amount = amount;
	data.buyer_name = buyer_name;
	data.redirect_url = redirectUrl;
	data.email = email;
	data.phone = phone;
	data.send_email = true;
	data.webhook = 'http://www.example.com/webhook/';
	data.send_sms = true;
	data.allow_repeated_payments = false;

	Insta.createPayment(data, function (error, response) {
		if (error) {
			console.log("error", error);
			// some error
			res.status(400).json({ err: "payment creation failed" });
		} else {
			// Payment redirection link at response.payment_request.longurl
			const responseData = JSON.parse(response);
			// console.log("response", responseData);
			const redirectUrl = responseData.payment_request.longurl;

			res.json({ redirectUrl: redirectUrl });
		}
	});

}

router.post("/register/:tokenId/:googleId/:eventId", async (req, res) => {
	const tokenId = req.params.tokenId;
	const eventId = req.params.eventId;
	const googleId = req.params.googleId;
	const eventType = req.body.eventType;
	const eventNo = req.body.eventNo;
	// console.log(eventType);

	const verifyRes = await verifyToken(tokenId);

	if (verifyRes[0]) {
		const event = await Event.findOne({ "_id": eventId });
		const { phone } = await User.findOne({ "googleId": googleId })
		const user = verifyRes[1];
		const eventName = event.name.replace(" ", "%20");

		// console.log("event", event);
		// console.log("user", phone, user);

		let redirectUrl = `http://www.tirutsava.com/api/events/callback?tokenId=${tokenId}&googleId=${googleId}&eventType=${eventType}&eventId=${eventId}&eventNo=${eventNo}&eventName=${eventName}`;

		if (event.entryFee === 0) {
			registerFreeEvent({
				res: res,
				email: user.email,
				phonenumber: phone,
				name: user.name,
				eventNo: eventNo,
				eventType: eventType,
				eventName: eventName,
				eventId: eventId,
				googleId: googleId
			});
		}
		else {
			registerEvent({
				purpose: event.name + " Registration",
				amount: event.entryFee,
				buyer_name: user.name,
				email: user.email,
				phone: phone,
				redirectUrl: redirectUrl,
				res: res
			});
		}
	}
	else {
		res.status(400).json({ err: "not logged in properly" })
	}
});

router.get('/callback/', async (req, res) => {
	let url_parts = url.parse(req.url, true),
		responseData = url_parts.query;

	if (responseData.payment_id) {
		const googleId = responseData.googleId;
		const eventId = responseData.eventId;
		const eventType = responseData.eventType;
		const eventName = responseData.eventName;
		const tokenId = responseData.tokenId;
		const eventNo = responseData.eventNo;

		// console.log(googleId, eventId, eventType);

		// Save the info that user has purchased the event.
		const event = await Event.findOne({ "_id": eventId })
		event.participants.push(googleId);
		const updatedEvent = await event.save();
		// console.log(updatedEvent);

		const user = await User.findOne({ "googleId": googleId })
		user.registeredeventids.push(eventId);
		const updatedUser = await user.save();
		// console.log(updatedUser);

		const googleInfo = await verifyToken(tokenId);
		// console.log(googleInfo[1]);

		await editSpreadSheet({
			sheetNb: eventNo,
			name: googleInfo[1].name,
			email: googleInfo[1].email,
			phonenumber: user.phone,
			timeline: new Date().toLocaleString(),
			eventId: eventId,
			eventType: eventType
		});

		// Redirect the user to payment complete page.
		return res.redirect(`http://www.tirutsava.com/events/${eventType}?eventName=${eventName}&eventId=${eventId}&payment_id=${responseData.payment_id}`);
	}

});

router.post('/update', async (req, res) => {
	await Event.updateOne({ _id: req.body.eventId }, {
		$set: {
			name: req.body.name,
			description: req.body.description,
			typeOfEvent: req.body.typeOfEvent,
			entryFee: req.body.entryFee,
			eventTime: req.body.eventTime,
			registrationClose: req.body.registrationClose,
			eventPrize: req.body.eventPrize,
			submissionMail: req.body.submissionMail,
			maxParticipants: req.body.maxParticipants,
			registrationOpen: req.body.registrationOpen
		}
	}, (err, event) => {
		if (err) {
			res.send(err);
		}
		else {
			console.log(event);
			res.send(true);
		}
	});
});


router.post('/create', async (req, res) => {

	// console.log(req.body);

	try {
		const newEvent = await new Event({
			name: req.body.name,
			typeOfEvent: req.body.typeOfEvent,
			description: req.body.description,
			entryFee: req.body.entryFee,
			eventTime: req.body.eventTime,
			registrationClose: req.body.registrationClose || null,
			submissionMail: req.body.submissionMail || "",
			eventPrize: req.body.eventPrize,
			maxParticipants: req.body.maxParticipants,
			registrationOpen: req.body.registrationOpen
		}).save();

		res.json({ msg: "event added", newEvent });

	} catch (err) {
		console.log(err);
		res.status(400).json({ err: "adding event failed" });
	}

});

module.exports = router;