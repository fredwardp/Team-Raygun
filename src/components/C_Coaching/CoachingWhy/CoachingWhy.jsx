import HeaderGradient from "../../HeaderGradient/HeaderGradient";
import "../../WallGrid/WallGrid.css";
import "./CoachingWhy.css";

const CoachingWhy = () => {
  return (
    <div className="coaching_wallgrid_bg_wrapper">
      <section className="wallgrid coaching_wallgrid">
        <div className="container">
          <div className="bg_wrapper">
            <HeaderGradient
              subHeading="Warum Team Raygun"
              heading="Was für uns spricht"
              heading2="(oder warum wir so gut sind)"
            />
          </div>

          <div className="grid">
            <div className="shadow_effect"></div>
            <div className="row">
              <div></div>
              <div className="min_width first">
                <article>
                  <img src="/img/five-star.svg" alt="star" />
                  <img src="/img/five-star.svg" alt="star" />
                  <img src="/img/five-star.svg" alt="star" />
                  <img src="/img/five-star.svg" alt="star" />
                  <img src="/img/five-star.svg" alt="star" />
                </article>
                <p className="coaching_wall_p">
                  Professionelle SEO-Ausbildung in renommierten Agenturen
                </p>
              </div>
              <div style={{ minWidth: "600px" }}></div>
              <div></div>
            </div>
            <div className="row">
              <div></div>
              <div className="min_width"></div>
              <div className="min_width second">
                <article>
                  <h3 className="coaching_wall_h3">7 Jahre</h3>
                </article>
                <p>
                  Mittlerweile 7 Jahre Praxiserfahrung mit SEO, Content und
                  Websites
                </p>
              </div>
              <div></div>
            </div>
            <div className="row">
              <div></div>
              <div className="min_width third">
                <article>
                  <h3 className="coaching_wall_h3">3 Jahre</h3>
                </article>
                <p>Seit über 3 Jahren selbstständig als SEO-Manager</p>
              </div>
              <div></div>
            </div>
            <div className="row">
              <div style={{ maxWidth: "100px" }}></div>
              <div style={{ minWidth: "440px" }}></div>
              <div className="min_width forth">
                <article>
                  <h3 className="coaching_wall_h3">20</h3>
                  <img src="/img/coaching_why_plus.svg" alt="" />
                </article>
                <p>
                  Anpassungsfähig mit langfristiger Strategie. Flexible
                  Gestaltung der Zusammenarbeit auch unter sich ändernden
                  Bedingungen.
                </p>
              </div>
              <div></div>
            </div>
            <div className="shadow_effect bottom"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingWhy;
