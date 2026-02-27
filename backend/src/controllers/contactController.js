import sendEmail from "../utils/sendEmail.js";

export const contactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const adminResult = await sendEmail(
            process.env.ADMIN_EMAIL,
            "New Yoga Bliss Inquiry",
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        );

        const userResult = await sendEmail(
            email,
            "Message Received - Yoga Bliss",
            `Hi ${name}, thank you for reaching out! We will contact you soon.`
        );

        if (!adminResult || !userResult) {
            return res.status(500).json({
                success: false,
                message: "Email failed to send",
            });
        }

        console.log("✅ Emails sent successfully");

        res.status(200).json({
            success: true,
            message: "Thank you! Your message has been received.",
        });

    } catch (error) {
        console.error("CONTROLLER ERROR:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};