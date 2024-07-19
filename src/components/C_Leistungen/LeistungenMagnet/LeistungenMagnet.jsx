import React from "react";
import "./LeistungenMagnet.css";
import content from "./LeistungenContent.json";
import HeaderGradient from "../../HeaderGradient/HeaderGradient";

const LeistungenMagnet = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="vorteile_sec"
      className="leistungen_magnet container"
    >
      <HeaderGradient
        subHeading="Deine Vorteile"
        heading="Ein Kundenmagnet für nachhaltiges Wachstum"
      />
      <div className="content">
        {content.map((data, index) => (
          <article key={index}>
            <img src={data.img} alt="" />
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
});

export default LeistungenMagnet;
