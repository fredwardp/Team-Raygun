import { useState } from "react";
import emailjs from "@emailjs/browser";

let heading;

const KontaktForm = ({ type }) => {
  const [contactData, setContactData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    website: "",
    heard_from: "",
    start_date: "",
    weekly_hours: "",
    form_type: { type },
    to_name: "Team Raygun",
    message: "",
  });

  if (type === "potenzialanalyse") {
    heading = (
      <h2>
        Ihre kostenfreie <span>SEO-Potenzialanalyse</span>
      </h2>
    );
  } else if (type === "seo-coaching") {
    heading = <h2>SEO-Coaching Anfrage</h2>;
  } else if (type === "projektanfrage") {
    heading = <h2>Projektanfrage</h2>;
  }
  const sendEmail = async (event) => {
    event.preventDefault();

    if (
      !contactData.from_name ||
      !contactData.from_email ||
      !contactData.message
    ) {
      console.log("Please fill all the information");
      return;
    }

    const serviceId = "service_lhiw93y";
    const templateId = "template_azgiquh";
    const publicKey = "_KMCsU-A6TgKZvSXZ";

    emailjs
      .send(serviceId, templateId, contactData, publicKey)
      .then((res) => {
        console.log("Email send successfully", res);
        setContactData({
          from_name: "",
          from_email: "",
          to_name: "Team Raygun",
          message: "",
        });
      })
      .catch((err) => {
        console.log("Could not send email", err);
      });
  };
  return (
    <section className="">

    </section>
  );
};

export default KontaktForm;
