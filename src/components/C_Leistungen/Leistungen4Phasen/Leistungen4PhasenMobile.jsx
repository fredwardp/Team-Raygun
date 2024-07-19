import "./Leistungen4PhasenMobile.css";
import content from "./Leistungen4PhasenMobile.json";
import PhasenDropdownBlock from "./PhasenDropdownBlock";

const Leistungen4PhasenMobile = () => {
  return (
    <section className="leistungen_phasen_mobile container">
      <img className="flywheel_mobile" src="/img/flywheel_mobile.png" alt="" />
      <article className="upper_content">
        <h2>Der Kreislaufeffekt</h2>
        <p>
          Das Flywheel erlangt erst dadurch seine Eigendynamik, dass es bei der
          Zielgruppe bestimmte Impulse auslöst. Impulse in Form von positiven
          Erfahrungen, geteilten Inhalten, Kundenzufriedenheit, positiven
          Bewertungen und Weiterempfehlungen.
        </p>
        <ul>
          <li>
            <img src="/img/leistungen_mobile_star.svg" alt="star" />
            <p>Eine positive Erfahrung bleibt im Gedächtnis.</p>
          </li>
          <li>
            <img src="/img/leistungen_mobile_star.svg" alt="star" />
            <p>Ein geteilter Inhalt bringt Reichweite.</p>
          </li>
          <li>
            <img src="/img/leistungen_mobile_star.svg" alt="star" />
            <p>Eine hohe Kundenzufriedenheit spricht sich herum.</p>
          </li>
          <li>
            <img src="/img/leistungen_mobile_star.svg" alt="star" />
            <p>Eine positive Bewertung baut Vertrauen auf.</p>
          </li>
          <li>
            <img src="/img/leistungen_mobile_star.svg" alt="star" />
            <p>Eine Weiterempfehlung bringt einen neuen Kunden.</p>
          </li>
        </ul>
      </article>
      <article className="lower_content">
        {content.map((data) => (
          <PhasenDropdownBlock key={data.heading} data={data} />
        ))}
      </article>
    </section>
  );
};

export default Leistungen4PhasenMobile;
