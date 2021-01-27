const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Merch = require('../models/Merch');
const verifyToken = require('../services/auth');

const Insta = require('instamojo-nodejs');
const url = require('url');
const config = require('../config/keys');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const editSpreadSheet = async ({ name, email, phonenumber, timeline, hoodieSize, address, pincode, googleId }) => {
    const doc = new GoogleSpreadsheet("1L9HG9OOhuHMaTQw8LlcDzqe7D_t5oJx50BB9rnC7VO8");

    await doc.useServiceAccountAuth({
        client_email: config.sheetClientEmail,
        private_key: config.sheetPrivateKey,
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const newRowCreated = await sheet.addRow([timeline, googleId, name, email, phonenumber, hoodieSize, pincode, address]);
    await newRowCreated.save();
}

const buyMerch = ({ purpose, amount, buyer_name, email, phone, redirectUrl, res }) => {

    // console.log(redirectUrl);

    Insta.setKeys(config.instaAPIKey, config.instaAuthKey);
    // Insta.isSandboxMode(true);

    const data = new Insta.PaymentData();

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
            // console.log(responseData);
            const redirectUrl = responseData.payment_request.longurl;

            res.json({ redirectUrl: redirectUrl });
        }
    });

}

router.post("/buymerch/:tokenId/:googleId", async (req, res) => {
    const tokenId = req.params.tokenId;
    const googleId = req.params.googleId;
    const address = req.body.address;
    const pincode = req.body.pincode;
    const hoodieSize = req.body.hoodieSize;
    // console.log(eventType);

    const verifyRes = await verifyToken(tokenId);

    if (verifyRes[0]) {
        const { phone } = await User.findOne({ "googleId": googleId })
        const user = verifyRes[1];

        await editSpreadSheet({
            name: user.name, email: user.email, phonenumber: phone, 
            timeline: new Date().toLocaleString(), 
            hoodieSize, 
            address, 
            pincode, 
            googleId
        });
        
        await new Merch({googleId: googleId, paymentStatus: "pending"}).save();

        let redirectUrl = `http://www.tirutsava.com/api/merch/callback?googleId=${googleId}`;

        buyMerch({
            purpose: "Tirutsava'21 Merch",
            amount: 560,
            buyer_name: user.name,
            email: user.email,
            phone: phone,
            redirectUrl: redirectUrl,
            res: res
        });
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

        // console.log(index);

        // await new Merch({googleId: googleId}).save();

        const merch = await Merch.findOne({googleId: googleId})
        merch.paymentStatus = "paid";
        await merch.save();

        // Redirect the user to payment complete page.
        return res.redirect(`http://www.tirutsava.com/merch?payment_id=${responseData.payment_id}`);
    }
});

module.exports = router;