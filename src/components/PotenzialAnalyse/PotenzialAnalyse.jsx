import { Link } from "react-router-dom";
import PotenzialAnalyseIcon from "../../assets/Svg/PotenzialAnalyseIcon";
import RightArrow from "../../assets/Svg/RightArrow";
import "./PotenzialAnalyse.css";

const PotenzialAnalyse = () => {
  return (
    <section className="potenzial_analyse ">
      <div className="border_wrapper">
        <article>
          <div className="elipse_bg"></div>
          <div className="gradient_bg">
            <div>
              <PotenzialAnalyseIcon />
            </div>
          </div>

          <h2>
            Ihre kostenfreie <br /> SEO-Potenzialanalyse
          </h2>
          <Link to="/kontakt/potenzialanalyse" className="btn">
            Kontakt aufnehmen
          </Link>
        </article>
      </div>
    </section>
  );
};

export default PotenzialAnalyse;
