import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER);

        const transporter = nodemailer.createTransport({
            service: "gmail",   // ✅ Use service instead of host/port
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Yoga Bliss" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.response);

        return info;

    } catch (err) {
        console.error("❌ NODEMAILER FULL ERROR:", err);
        return null;
    }
};

export default sendEmail;