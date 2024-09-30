import axios from "axios";

export const sendEmail = async (contactData, requestTyp) => {
  const API_KEY = import.meta.env.VITE_APP_MAIL_API_KEY;

  const data = {
    sender: { name: contactData.from_name, email: "kontakt@teamraygun.com" },
    to: [{ email: "kontakt@teamraygun.com", name: contactData.to_name }],
    subject: `Neue Anfrage: ${requestTyp}`,
    htmlContent: `<html><body>
                  <h1>Neue Nachricht von ${contactData.from_name}</h1>
                  <p>Firma: ${contactData.company}</p>
                  <p>Website: ${contactData.website}</p>
                  <p>Nachricht: ${contactData.message}</p>
                  <p>email: ${contactData.from_email}</p>
                  </body></html>`,
  };

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      data,
      {
        headers: {
          "api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("E-Mail erfolgreich gesendet:", response.data);
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
  }
};
