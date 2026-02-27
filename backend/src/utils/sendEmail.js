import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Must be false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // juqliicphifjkkte (Verified from your screenshot!)
            },
            tls: {
                rejectUnauthorized: false,
                minVersion: "TLSv1.2"
            }
        });

        const mailOptions = {
            from: `"Yoga Bliss" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        };

        // We use await here so the background process knows when it's done
        return await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error(`❌ NODEMAILER ERROR: ${err.message}`);
        return null;
    }
};

export default sendEmail;