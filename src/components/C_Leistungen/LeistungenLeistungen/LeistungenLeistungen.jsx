import React from "react";
import "./LeistungenLeistungen.css";
import content from "./LeistungenInfos.json";

const LeistungenLeistungen = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <section id="leistungen_sec" className="leistungen_lst container" ref={ref}>
      <div className="heading">
        <h2>Unsere Leistungen</h2>
        <p>
          Unsere vier Kernleistungen sind so gewählt, dass sie sich gegenseitig
          verstärken und eine Aufwärtsspirale entsteht. SEO demonstriert
          Relevanz gegenüber Suchmaschinen und sorgt für mehr Websitenutzer.
          Diese Nutzer werden durch exzellentes Webdesign und hervorragenden
          Content überzeugt und generieren positive Nutzersignale für
          Suchmaschinen. Die Seeding- und PR-Maßnahmen bringen weitere Nutzer
          von anderen Websites und sorgen für Verlinkungen, die wiederum das SEO
          verstärken.
        </p>
      </div>
      <div className="content">
        {content.map((data, index) => (
          <article className="glassmorph" key={index}>
            <div>
              <p>{data.subHeading}</p>
              <img src={data.img} alt="" />
            </div>
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
});

export default LeistungenLeistungen;
