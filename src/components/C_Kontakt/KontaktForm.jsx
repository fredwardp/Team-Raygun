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
    <section className="contact_data">
      {heading}
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          action=""
        >
          <div className="input_flex">
            <div className="label_input_wrapper">
              <label htmlFor="from_name">Voller Name*</label>
              <input
                value={contactData.from_name}
                id="from_name"
                type="text"
                onChange={(event) =>
                  setContactData({
                    ...contactData,
                    from_name: event.target.value,
                  })
                }
                placeholder="Anna Mustermann"
              />
            </div>
            <div className="label_input_wrapper">
              <label htmlFor="company">
                Unternehmen <span>(optional)</span>
              </label>
              <input
                value={contactData.company}
                type="text"
                id="company"
                onChange={(event) =>
                  setContactData({
                    ...contactData,
                    company: event.target.value,
                  })
                }
                placeholder="Gesellschaft GmbH"
              />
            </div>
          </div>
          <div className="label_input_wrapper">
            <label htmlFor="from_email">E-Mail*</label>
            <input
              value={contactData.from_email}
              type="email"
              name=""
              id="from_email"
              onChange={(event) =>
                setContactData({
                  ...contactData,
                  from_email: event.target.value,
                })
              }
              placeholder="hello@seo-lernen.de"
            />
          </div>

          {type === "seo-coaching" && (
            <div className="input_flex">
              <div className="label_input_wrapper">
                <label htmlFor="start_date">Beginn ab*</label>
                <select
                  name="start_date"
                  id="start_date"
                  placeholder="Startdatum auswählen..."
                  value={contactData.start_date}
                  onSelect={(event) =>
                    setContactData({
                      ...contactData,
                      start_date: event.target.value,
                    })
                  }
                >
                  <option value="option1">option1</option>
                  <option value="option1">option1</option>
                  <option value="option1">option1</option>
                  <option value="option1">option1</option>
                </select>
              </div>
              <div className="label_input_wrapper">
                <label htmlFor="weekly_hours">Anzahl Stunden/ pro Woche*</label>
                <select
                  name="weekly_hours"
                  id="weekly_hours"
                  placeholder="Anzahl auswählen..."
                  value={contactData.weekly_hours}
                  onSelect={(event) =>
                    setContactData({
                      ...contactData,
                      weekly_hours: event.target.value,
                    })
                  }
                >
                  <option value="option1">option1</option>
                  <option value="option1">option1</option>
                  <option value="option1">option1</option>
                  <option value="option1">option1</option>
                </select>
              </div>
            </div>
          )}
          <div className="label_input_wrapper">
            <label htmlFor="heard_from">Wie hast du von uns gehört?*</label>
            <select
              name="heard_from"
              id="heard_from"
              placeholder="Option auswählen..."
              value={contactData.heard_from}
              onSelect={(event) =>
                setContactData({
                  ...contactData,
                  heard_from: event.target.value,
                })
              }
            >
              <option value="option1">option1</option>
              <option value="option1">option1</option>
              <option value="option1">option1</option>
              <option value="option1">option1</option>
            </select>
          </div>
          <div className="label_input_wrapper">
            <label htmlFor="message">
              Deine Nachricht <span>(optional)</span>
            </label>
            <textarea
              value={contactData.message}
              name=""
              id="message"
              placeholder="Deine Nachricht an mich"
              onChange={(event) =>
                setContactData({ ...contactData, message: event.target.value })
              }
            ></textarea>
          </div>
          <div>
            <button onClick={sendEmail}>submit</button>
            <p>
              Oder eine Mail an:{" "}
              <a href="mailto:hallo@digitalraygun.de">hallo@digitalraygun.de</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default KontaktForm;
