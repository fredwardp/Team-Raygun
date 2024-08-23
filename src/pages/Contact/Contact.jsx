import { useEffect, useState } from "react";
import "./Contact.css";
import { useParams } from "react-router-dom";
import KontaktForm from "../../components/C_Kontakt/KontaktForm";

const Contact = () => {
  const [requestTyp, setRequestTyp] = useState("potenzialanalyse");
  const type = useParams();

  useEffect(() => {
    setRequestTyp(type.type);
  }, []);

  const changeContact = (type) => {
    setRequestTyp(type);
  };

  return (
    <header className="container contact">
      <h1>Kontakt</h1>

      <div className="contact_buttons">
        <button onClick={() => changeContact("potenzialanalyse")}>
          Kostenlose Potenzialanalyse
        </button>
        <button onClick={() => changeContact("projektanfrage")}>
          Projektanfrage senden
        </button>
        <button onClick={() => changeContact("seo-coaching")}>
          SEO-Coaching-Anfrage
        </button>
      </div>
      <KontaktForm type={requestTyp} />
    </header>
  );
};

export default Contact;
