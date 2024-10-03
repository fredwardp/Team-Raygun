import { Link } from "react-router-dom";
import "./HomeGrid.css";
import HomeRad from "../../../assets/Svg/HomeRad";
import HomeLeistungenArrow from "../../../assets/Svg/HomeLeistungenArrow";
import HomeTreeArrow from "../../../assets/Svg/HomeTreeArrow";
import HomeCoaching from "../../../assets/Svg/HomeCoaching";

const HomeGrid = () => {
  return (
    <section className="home_grid">
      <div className="container">
        <article class="item1 glassmorph">
          <div className="left">
            <div>
              <h2>
                Endlich mehr organische Leads dank unserer
                Inbound-Marketing-Strategie
              </h2>
              <p>
                Mit kreativen Marketing-Ansätzen und dem technischen Verständnis
                für Suchalgorithmen sorgen wir für organisches Wachstum und
                Umsatzsteigerung, ganz ohne Werbeanzeigen.
              </p>
            </div>
            <Link class="arrow_link" to="/leistungen">
              Unsere Leistungen
              <HomeLeistungenArrow />
            </Link>
          </div>
          <div className="right">
            <HomeRad />
            <div>
              <img src="/img/home_rad_inner_swirl.png" alt="" />
              <img src="/img/home_rad_outer_swirl.png" alt="" />
            </div>
          </div>
        </article>
        <article class="item2">
          <div>
            <h2>
              <span className="tree_counter">120</span>
              <span>Bäume gepflanzt</span>
            </h2>
            <p>
              Wir investieren aktiv in die Wiederaufforstung von Wäldern auf dem
              ganzen Planeten. Dabei handelt es sich um Bäume, die dem
              Klimawandel entgegenwirken, & Bäume, die wildlebende Tiere
              schützen.
            </p>
          </div>
          <a
            href={`${window.location.origin}/urkunde_120 _bäume.pdf`}
            className="arrow_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Urkunden ansehen
            <HomeTreeArrow />
          </a>
        </article>
        <article class="item3 glassmorph">
          <div>
            <h2>Die Agentur Team Raygun</h2>
            <p>
              Erfahre die spannende Entstehungsgeschichte unserer Agentur, wie
              sich unser Team zusammensetzt und warum wir jeden Morgen
              aufstehen.
            </p>
          </div>
          <div>
            <Link class="arrow_link" to="/agentur">
              Über uns
              <HomeLeistungenArrow />
            </Link>
            <img src="/img/home_grid_logo.svg" alt="" />
          </div>
        </article>
        <article class="item4 glassmorph">
          <div className="svg_wrapper">
            <HomeCoaching />
          </div>
          <div className="content">
            <h2>SEO-Coaching</h2>
            <p>
              Das SEO-Coaching ist eine besonders interessante Möglichkeit,
              unser Wissen anzuzapfen. Zum Beispiel im 1:1, als 1:n oder als
              Workshop fürs Team.
            </p>
            <div className="btn_wrapper">
              <Link className="btn" to="/kontakt/seo-coaching">
                Termin vereinbaren
              </Link>
              <Link class="arrow_link" to="/coaching">
                Mehr erfahren
                <HomeLeistungenArrow />
              </Link>
            </div>
          </div>
        </article>
        <article class="item5">
          <div>
            <p>Kostenloser Download</p>
          </div>
          <h2>"Content Marketing in Zeiten von KI"</h2>
          <p className="autor">Maximilian Pawelzik</p>
          <a className="btn" href="">
            Coming soon
          </a>
        </article>
      </div>
    </section>
  );
};

export default HomeGrid;
