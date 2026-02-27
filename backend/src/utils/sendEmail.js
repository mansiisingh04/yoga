import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Must be false for port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // 16-character App Password (no spaces)
            },
            tls: {
                // Critical for cloud hosting like Render to bypass handshake blocks
                rejectUnauthorized: false,
                minVersion: "TLSv1.2"
            },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000,
        });

        const mailOptions = {
            from: `"Yoga Bliss" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        };

        // We return the promise so the controller can choose to 'await' it or not
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to ${to}`);
        return info;
    } catch (err) {
        // We log the error but don't let it crash the main process
        console.error(`❌ NODEMAILER ERROR: ${err.message}`);
        return null;
    }
};

export default sendEmail;