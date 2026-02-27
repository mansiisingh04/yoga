import sendEmail from "../utils/sendEmail.js";

export const contactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. RESPOND IMMEDIATELY 
        // This ensures the user sees a success message in <1 second.
        res.status(200).json({
            success: true,
            message: "Thank you! Your message has been received.",
        });

        // 2. RUN EMAILS IN BACKGROUND
        // Wrapped in an async function that we do NOT 'await'
        const handleEmails = async () => {
            try {
                await Promise.all([
                    // Notify Admin
                    sendEmail(
                        process.env.ADMIN_EMAIL,
                        "New Yoga Bliss Inquiry",
                        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                    ),
                    // Auto-reply to User
                    sendEmail(
                        email,
                        "We received your message",
                        `Hi ${name}, thank you for reaching out to Yoga Bliss! 🧘‍♀️
                        `
                    )
                ]);
            } catch (err) {
                console.error("Background email process failed:", err.message);
            }
        };

        handleEmails();

    } catch (error) {
        console.error("CONTACT CONTROLLER ERROR:", error);
        if (!res.headersSent) {
            res.status(500).json({ success: false, message: "Server error" });
        }
    }
};