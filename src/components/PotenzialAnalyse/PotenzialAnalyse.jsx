import PotenzialAnalyseIcon from "../../assets/Svg/PotenzialAnalyseIcon";
import RightArrow from "../../assets/Svg/RightArrow";
import "./PotenzialAnalyse.css";

const PotenzialAnalyse = () => {
  return (
    <section className="potenzial_analyse container">
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
          <button className="btn">Kontakt aufnehmen</button>
        </article>
      </div>
    </section>
  );
};

export default PotenzialAnalyse;
