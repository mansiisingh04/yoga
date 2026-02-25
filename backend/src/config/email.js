const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use the 16-character App Password here
    },
    tls: {
        rejectUnauthorized: false, // Helps avoid "self-signed certificate" errors on localhost
    }
});

module.exports = transporter;