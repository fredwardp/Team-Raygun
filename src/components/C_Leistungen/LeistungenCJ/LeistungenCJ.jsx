import HeaderGradient from "../../HeaderGradient/HeaderGradient";
import "./LeistungenCJ.css";

const LeistungenCJ = () => {
  return (
    <section className="leistungen_cj container">
      <HeaderGradient
        subHeading="Einen Schritt voraus"
        heading="Inbound-Marketing entlang der"
        span="Customer Journey"
      />
      <article className="content">
        <p>
          Eine Customer-Journey beschreibt die Gesamtheit aller Erfahrungen, die
          euer Kunde mit eurem Unternehmen macht, von der ersten Wahrnehmung bis
          zum Kauf und darüber hinaus. Mittels Inbound-Marketing helfen wir
          euren Kunden, in jeder Phase seine Ziele zu erreichen. Jede Phase ist
          ein wertvoller Touchpoint mit der eigenen Zielgruppe.
        </p>
        <p>
          Im Gegensatz zu einem Funnel (Trichter), verpufft bei einem Flywheel
          (Schwungrad) die Energie nicht am Ende eines linearen Prozesses,
          sondern überträgt sich an den Anfang und es entsteht ein Kreislauf.
          Das Rad erhält sein Momentum und gewinnt an Schwung.
        </p>
      </article>
    </section>
  );
};

export default LeistungenCJ;
