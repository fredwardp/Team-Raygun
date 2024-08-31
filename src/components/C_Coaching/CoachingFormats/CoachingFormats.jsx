import "./CoachingFormats.css";
import content from "./CoachingFormats.json";

const CoachingFormats = () => {
  return (
    <section className="coaching_formats">
      <article>
        <div>
          <h2>Unsere Coaching Formate</h2>
          <p>
            Das ist der spannendste Punkt. Denn das müssen wir individuell
            festlegen. Je nach dem, wo Bedarf und Herausforderungen bestehen,
            sollten die Schwerpunkte gesetzt werden. Auch wenn die Regeln, nach
            denen SEO funktioniert, für alle gleich sind, ist jede Website mit
            ihrem Angebot und ihrem Wettbewerb individuell zu betrachten.
          </p>
        </div>
      </article>
      <div className="content_wrapper">
        {content.map((data, index) => (
          <div className="format_box" key={index}>
            {data.icon && <img src={data.icon} alt="" />}

            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </div>
        ))}
        <div className="shadow_box_wrapper">
          <div className="shadow_box"></div>
        </div>
      </div>
    </section>
  );
};

export default CoachingFormats;
