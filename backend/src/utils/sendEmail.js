const sendEmail = async (to, subject, text) => {
    try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY,
            },
            body: JSON.stringify({
                sender: {
                    name: "Yoga Bliss",
                    email: process.env.ADMIN_EMAIL,
                },
                to: [{ email: to }],
                subject: subject,
                textContent: text,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("❌ BREVO ERROR:", data);
            return null;
        }

        console.log("✅ Brevo email sent");
        return data;

    } catch (error) {
        console.error("❌ BREVO FETCH ERROR:", error);
        return null;
    }
};

export default sendEmail;