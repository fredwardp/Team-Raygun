import HomeAIBox4 from "../../../assets/Svg/HomeAIBox4";
import HomeCoaching from "../../../assets/Svg/HomeCoaching";
import "./CoachingWhat.css";

const CoachingWhat = () => {
  return (
    <section className="agentur_about">
      <div className="content">
        <div className="gradient_opacity_wrapper">
          <div></div>
          <p>Das erhälst du</p>
        </div>
        <h2>Was ist das SEO-Coaching?</h2>
        <p>
          Ein Coaching für Suchmaschinenoptimierung zielt darauf ab, Wissen und
          Fähigkeiten zu trainieren, sodass SEO-Maßnahmen selbst entwickelt und
          umgesetzt werden können. Kurz: Ein SEO-Coaching ist für alle, die SEO
          endlich verstehen und sich verbessern wollen.
        </p>
      </div>
      <div className="img_wrapper">
        <HomeCoaching />
      </div>
    </section>
  );
};

export default CoachingWhat;
