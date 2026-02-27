import * as Brevo from "@getbrevo/brevo";

const sendEmail = async (to, subject, text) => {
    try {
        const apiInstance = new Brevo.TransactionalEmailsApi();

        apiInstance.setApiKey(
            Brevo.TransactionalEmailsApiApiKeys.apiKey,
            process.env.BREVO_API_KEY
        );

        const sendSmtpEmail = new Brevo.SendSmtpEmail();

        sendSmtpEmail.sender = {
            email: process.env.ADMIN_EMAIL,
            name: "Yoga Bliss",
        };

        sendSmtpEmail.to = [{ email: to }];
        sendSmtpEmail.subject = subject;
        sendSmtpEmail.textContent = text;

        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

        console.log("✅ Brevo email sent");
        return data;

    } catch (error) {
        console.error("❌ BREVO ERROR:", error);
        return null;
    }
};

export default sendEmail;