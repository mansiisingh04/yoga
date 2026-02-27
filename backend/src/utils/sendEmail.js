// backend/src/utils/sendEmail.js
import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587, // Use 465 for secure SSL
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Now without spaces!
            },

            tls: {
                // This helps bypass connection blocks on some servers
                rejectUnauthorized: false
            },
            connectionTimeout: 10000,// These two lines will show you EXACTLY why it fails in your VS Code terminal

            greetingTimeout: 10000,
            socketTimeout: 10000,
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