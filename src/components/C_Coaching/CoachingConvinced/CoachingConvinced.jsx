import { Link } from "react-router-dom";
import CoachingConvincedArrow from "../../../assets/Svg/CoachingConvincedArrow";
import "./CoachingConvinced.css";

const CoachingConvinced = () => {
  return (
    <section className="coaching_convinced">
      <div>
        <div></div>
        <h2>Noch nicht überzeugt?</h2>
      </div>
      <div className="link_wrapper">
        <Link to="about">
          <CoachingConvincedArrow />
          <p>Alle bisherigen Veröffentlichungen</p>
        </Link>
        <Link to="/casestudies">
          <CoachingConvincedArrow />
          <p>Unsere Case Studies</p>
        </Link>
        <a href="#testimonials">
          <CoachingConvincedArrow />
          <p>Alle Kundenstimmen</p>
        </a>
      </div>
    </section>
  );
};

export default CoachingConvinced;
