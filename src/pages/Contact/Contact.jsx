import { useEffect, useState } from "react";
import "./Contact.css";
import { useParams } from "react-router-dom";
import { sendEmail } from "./sendMail";
import CustomeSelectIcon from "../../assets/Svg/CustomeSelectIcon";
import CustomeSelectDropdown from "./CustomeSelectDropdown";

const Contact = () => {
  const { type } = useParams();
  const [contactData, setContactData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    website: "",
    heard_from: "",
    start_date: "",
    weekly_hours: "",
    form_type: type.charAt(0).toUpperCase() + type.slice(1),
    to_name: "Team Raygun",
    message: "",
  });
  const [requestTyp, setRequestTyp] = useState("potenzialanalyse");
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(true);

  useEffect(() => {
    setRequestTyp(type.type);
  }, [type]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!contactData.from_name) errors.from_name = true;
    if (!contactData.from_email) errors.from_email = true;
    if (!contactData.website) errors.website = true;
    if (!contactData.message) errors.message = true;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage("Bitte fülle alle erforderlichen Felder aus.");
      return;
    }

    sendEmail(contactData, requestTyp)
      .then(() => {
        setSuccessMessage(true);
        setErrorMessage(false);
      })
      .catch(() => {
        setErrorMessage("Es gab ein Problem beim Senden der Anfrage.");
      });
  };

  const getInputStyle = (field) => {
    return fieldErrors[field] ? { border: "2px solid #e64d84" } : {};
  };

  return (
    <header className="contact">
      <div className="container contact_wrapper">
        <h1>Kontakt</h1>
        {successMessage ? (
          <div className="success_message_wrapper glassmorph">
            <h2 className="success_message">Vielen Dank für deine Anfrage.</h2>
            <p>Wir melden uns schnellstmöglich zurück! </p>
          </div>
        ) : (
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <div className="label_input_wrapper">
              <label htmlFor="heard_from">Ich Interessiere mich für:*</label>
              <div
                className="custome_select"
                onMouseEnter={() => setDropdownToggle((prev) => !prev)}
                onMouseLeave={() => setDropdownToggle((prev) => !prev)}
              >
                {contactData.form_type}
                <CustomeSelectIcon />
                {dropdownToggle && (
                  <CustomeSelectDropdown
                    setContactData={setContactData}
                    contactData={contactData}
                  />
                )}
              </div>
            </div>

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
                  style={getInputStyle("from_name")}
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

            <div className="input_flex">
              <div className="label_input_wrapper">
                <label htmlFor="from_email">E-Mail*</label>
                <input
                  value={contactData.from_email}
                  type="email"
                  id="from_email"
                  onChange={(event) =>
                    setContactData({
                      ...contactData,
                      from_email: event.target.value,
                    })
                  }
                  placeholder="hello@seo-lernen.de"
                  style={getInputStyle("from_email")}
                />
              </div>

              <div className="label_input_wrapper">
                <label htmlFor="website">Webseite*</label>
                <input
                  value={contactData.website}
                  type="text"
                  id="website"
                  onChange={(event) =>
                    setContactData({
                      ...contactData,
                      website: event.target.value,
                    })
                  }
                  placeholder="www.beispiel.de"
                  style={getInputStyle("website")}
                />
              </div>
            </div>

            <div className="label_input_wrapper">
              <label htmlFor="heard_from">
                Wie hast du von uns gehört? <span>(optional)</span>
              </label>
              <input
                value={contactData.heard_from}
                type="text"
                id="heard_from"
                onChange={(event) =>
                  setContactData({
                    ...contactData,
                    heard_from: event.target.value,
                  })
                }
                placeholder="z.B. Empfehlung"
              />
            </div>

            <div className="label_input_wrapper">
              <label htmlFor="message">Deine Nachricht*</label>
              <textarea
                value={contactData.message}
                id="message"
                placeholder="Deine Nachricht an uns"
                required
                onChange={(event) =>
                  setContactData({
                    ...contactData,
                    message: event.target.value,
                  })
                }
                style={getInputStyle("message")}
              ></textarea>
            </div>

            <button className="btn_gradient" type="submit">
              Kontakt aufnehmen
            </button>
          </form>
        )}
      </div>
    </header>
  );
};

export default Contact;
