import { Link } from "react-router-dom";
import HeaderGradient from "../HeaderGradient/HeaderGradient";
import "./FAQ.css";
import content from "./FAQ.json";
import QuestionBlock from "./QuestionBlock";

const text = (
  <div className="link_wrapper">
    <p>Nicht gefunden was du suchst? </p>
    <Link
      style={{
        textDecoration: "underline",
        color: "var(--text-color)",
        fontWeight: "400",
      }}
      to="/contact"
    >
      Kontaktiere uns
    </Link>
    <p>gerne für weitere Fragen</p>
  </div>
);

const FAQ = () => {
  return (
    <section className="faq container">
      <HeaderGradient
        subHeading={"FAQ"}
        heading={"Fragen & Antworten"}
        text={text}
      />
      <article className="content">
        {content.map((data, index) => (
          <QuestionBlock data={data} key={index} />
        ))}
      </article>
    </section>
  );
};

export default FAQ;
