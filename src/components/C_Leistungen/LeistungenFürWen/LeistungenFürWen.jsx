import "./LeistungenFürWen.css";
import content from "./FürWen.json";
import HeaderGradient from "../../HeaderGradient/HeaderGradient";

const LeistungenFürWen = () => {
  return (
    <section className="leistungen_fürwen container">
      <HeaderGradient
        subHeading={"Unsere Methode"}
        heading={
          <h2>
            Für wen ist das <br /> Inbound-Flywheel geeignet?
          </h2>
        }
      />
      <div className="content">
        {content.map((data) => (
          <article key={data.heading}>
            <img src={data.img} alt={data.heading} />
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LeistungenFürWen;
