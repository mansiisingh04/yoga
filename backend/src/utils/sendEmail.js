// backend/src/utils/sendEmail.js
import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Now without spaces!
            },
            // These two lines will show you EXACTLY why it fails in your VS Code terminal
            logger: true,
            debug: true
        });

        const mailOptions = {
            from: `"Yoga Bliss" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to ${to}`);
        return info;
    } catch (err) {
        // If this runs, you will see a specific error code (like 535) in your terminal
        console.error(`❌ NODEMAILER ERROR: ${err.message}`);
        throw err;
    }
};

export default sendEmail;