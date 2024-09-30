import React from "react";
import HeaderGradient from "../../HeaderGradient/HeaderGradient";
import "./LeistungenInbound.css";
import content from "./LeistungenInbound.json";

const LeistungenInbound = React.forwardRef((props, ref) => {
  return (
    <section
      id="methode_sec"
      className="leistungen_inbound container"
      ref={ref}
    >
      <HeaderGradient
        heading="Inbound-Marketing entlang der Customer Journey"
        dsplNone={true}
      />
      <div className="content">
        {content.map((data, index) => (
          <article key={index}>
            <div>#{index + 1}</div>
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
          </article>
        ))}
      </div>

      <article className="long-content">
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
      {/* <div className="leistungen_big_bg"></div> */}
    </section>
  );
});

export default LeistungenInbound;
