import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactTester = () => {
  const [contactData, setContactData] = useState({
    from_name: "",
    from_email: "",
    to_name: "Team Raygun",
    message: "",
  });
  console.log(contactData);

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
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      action=""
    >
      <input
        style={{ color: "black" }}
        value={contactData.from_name}
        type="text"
        onChange={(event) =>
          setContactData({ ...contactData, from_name: event.target.value })
        }
      />

      <input
        style={{ color: "black" }}
        value={contactData.from_email}
        type="email"
        name=""
        id=""
        onChange={(event) =>
          setContactData({ ...contactData, from_email: event.target.value })
        }
      />

      <textarea
        style={{ color: "black" }}
        value={contactData.message}
        name=""
        id=""
        onChange={(event) =>
          setContactData({ ...contactData, message: event.target.value })
        }
      ></textarea>
      <button onClick={sendEmail}>submit</button>
    </form>
  );
};

export default ContactTester;
