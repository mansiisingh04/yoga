import sendEmail from "../utils/sendEmail.js";

export const contactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. RESPOND IMMEDIATELY with the exact JSON the frontend needs
        res.status(200).json({
            success: true,
            message: "Thank you! Your message has been received.",
        });

        // 2. RUN EMAILS IN BACKGROUND (Non-blocking)
        const handleBackgroundEmails = async () => {
            try {
                await Promise.all([
                    sendEmail(
                        process.env.ADMIN_EMAIL,
                        "New Yoga Bliss Inquiry",
                        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                    ),
                    sendEmail(
                        email,
                        "Message Received - Yoga Bliss",
                        `Hi ${name}, thank you for reaching out! We will contact you soon.`
                    )
                ]);
                console.log("✅ Background emails sent.");
            } catch (err) {
                console.error("Background email failure:", err.message);
            }
        };

        handleBackgroundEmails();

    } catch (error) {
        console.error("CONTROLLER ERROR:", error);
        // Only send error if we haven't sent the success response yet
        if (!res.headersSent) {
            res.status(500).json({ success: false, message: "Server error" });
        }
    }
};