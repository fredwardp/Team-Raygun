import HeaderGradient from "../HeaderGradient/HeaderGradient";
import "./WallGrid.css";

const WallGrid = () => {
  return (
    <section className="wallgrid">
      <div className="container">
        <div className="bg_wrapper">
          <HeaderGradient
            subHeading="Zusammenarbeit"
            heading="Eine Zusammenarbeit, die keine Wünsche offen lässt."
          />
        </div>

        <div className="grid">
          <div className="shadow_effect"></div>
          <div className="row">
            <div></div>
            <div className="min_width">
              <article>
                <img src="/img/default_square_icon.svg" alt="" />
                <h3>Gemeinsam</h3>
              </article>
              <p>
                “Team” ist nicht ohne Grund Teil unseres Namens. Denn auch
                unsere Kunden sehen wir in erster Linie als Teampartner.
              </p>
            </div>
            <div style={{ minWidth: "600px" }}></div>
            <div></div>
          </div>
          <div className="row">
            <div></div>
            <div className="min_width"></div>
            <div className="min_width">
              <article>
                <img src="/img/default_square_icon.svg" alt="" />
                <h3>Langfristig</h3>
              </article>
              <p>
                Warum aufhören, wenn es hervorragend läuft? Andauernden Erfolg
                erreichen wir durch beständige Zusammenarbeit.
              </p>
            </div>
            <div></div>
          </div>
          <div className="row">
            <div></div>
            <div className="min_width">
              <article>
                <img src="/img/default_square_icon.svg" alt="" />
                <h3>Kreativ</h3>
              </article>
              <p>
                Nicht nur kreative Lösungen suchen, sondern eine Umgebung
                schaffen, in der Originalität und Einfallsreichtum entstehen
                können.
              </p>
            </div>
            <div></div>
          </div>
          <div className="row">
            <div style={{ maxWidth: "100px" }}></div>
            <div style={{ minWidth: "440px" }}></div>
            <div className="min_width">
              <article>
                <img src="/img/default_square_icon.svg" alt="" />
                <h3>Flexibel</h3>
              </article>
              <p>
                Anpassungsfähig mit langfristiger Strategie. Flexible Gestaltung
                der Zusammenarbeit auch unter sich ändernden Bedingungen.
              </p>
            </div>
            <div></div>
          </div>
          <div className="row">
            <div style={{ minWidth: "280px" }}></div>
            <div className="min_width">
              <article>
                <img src="/img/default_square_icon.svg" alt="" />
                <h3>Transparent</h3>
              </article>
              <p>
                Ein Hoch auf die Datenerfassung, die unsere Arbeit messbar
                macht. Mittels Tools und Dashboards wird jeder Erfolg sichtbar.
              </p>
            </div>
            <div style={{ minWidth: "440px" }}></div>
            <div></div>
          </div>
          <div className="shadow_effect bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default WallGrid;
