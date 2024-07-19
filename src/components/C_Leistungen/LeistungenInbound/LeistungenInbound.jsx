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
      <HeaderGradient subHeading="Unsere Methode" heading="Inbound-Marketing" />
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

export default LeistungenInbound;
