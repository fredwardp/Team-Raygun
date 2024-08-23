import { Link } from "react-router-dom";
import "./AgenturLeads.css";
import HomeLeistungenArrow from "../../../assets/Svg/HomeLeistungenArrow";
import HomeRad from "../../../assets/Svg/HomeRad";

const AgenturLeads = () => {
  return (
    <section className="agentur_leads">
      <article>
        <div>
          <h2>
            Endlich mehr organische Leads dank unserer
            Inbound-Marketing-Strategie
          </h2>
          <p>
            Mit kreativen Marketing-Ansätzen und dem technischen Verständnis für
            Suchalgorithmen sorgen wir für organisches Wachstum und
            Umsatzsteigerung, ganz ohne Werbeanzeigen.
          </p>
        </div>
        <Link to="/leistungen">
          Unsere Leistungen
          <HomeLeistungenArrow />
        </Link>
      </article>
      <div className="right">
        <HomeRad />
        <div>
          <img src="/img/home_rad_inner_swirl.png" alt="" />
          <img src="/img/home_rad_outer_swirl.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AgenturLeads;
