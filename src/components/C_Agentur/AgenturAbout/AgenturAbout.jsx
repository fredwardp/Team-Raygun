import AgenturRaygunLogo from "../../../assets/Svg/AgenturRaygunLogo";
import "./AgenturAbout.css";

const AgenturAbout = () => {
  return (
    <section className="agentur_about">
      <div className="content">
        <div className="gradient_opacity_wrapper">
          <div></div>
          <p>Team Raygun</p>
        </div>
        <h2>Über Uns</h2>
        <p>
          Team Raygun (ehem. hausamseo.de) ist ein selbständiges remote
          Kollektiv aus Expertinnen und Experten für digitales Wachstum, Online-
          Sichtbarkeit und Webpräsenz.
        </p>
        <p>
          Als ortsunabhängiges Projektteam entwickeln wir Strategien, beraten
          ganzheitlich, packen mit an und heben unsere Kundenprojekte auf das
          nächste und übernächste Level.
        </p>
      </div>
      <div className="img_wrapper">
        <AgenturRaygunLogo />
      </div>
    </section>
  );
};

export default AgenturAbout;
