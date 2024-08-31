import HeaderGradient from "../../HeaderGradient/HeaderGradient";
import "./CoachingThemen.css";
import content from "./CoachingThemen.json";

const CoachingThemen = () => {
  return (
    <section className="coaching_themen">
      <HeaderGradient
        subHeading="Themen & Inhalte"
        heading="Welche Themen und Inhalte werden vermittelt?"
      />
      <div className="coaching_grid">
        {content.map((data, index) => (
          <article key={index}>
            <img src={data.icon} alt="checkbox" />
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CoachingThemen;
