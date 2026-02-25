import sendEmail from "../utils/sendEmail.js";

export const contactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // ✅ RESPOND IMMEDIATELY (no waiting for email)
        res.status(200).json({
            success: true,
            message:
                "Thank you for reaching out. Our team will contact you shortly.",
        });

        // ✅ SEND EMAILS IN BACKGROUND (parallel sending)
        Promise.all([

            // email to admin
            sendEmail(
                process.env.ADMIN_EMAIL,
                "New Contact Message - Yoga Bliss",
                `New contact form submission

Name: ${name}
Email: ${email}
Message: ${message}`
            ),

            // auto reply to user
            sendEmail(
                email,
                "We received your message",
                `Hi ${name},

Thank you for reaching out to Yoga Bliss 🧘‍♀️

Our team has received your message and will contact you shortly.

Warm regards,
Yoga Bliss Team`
            )

        ]).catch((error) => {
            // background email errors logged here
            console.error("EMAIL BACKGROUND ERROR:", error);
        });

    } catch (error) {
        console.error("CONTACT ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Failed to send message",
        });
    }
};