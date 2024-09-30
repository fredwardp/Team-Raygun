import HomeAIBox4 from "../../../assets/Svg/HomeAIBox4";
import HomeCoaching from "../../../assets/Svg/HomeCoaching";
import "./CoachingWhat.css";

const CoachingWhat = () => {
  return (
    <>
      <section className="agentur_about">
        <div className="content">
          <div className="gradient_opacity_wrapper">
            <div></div>
            <p>Das erhälst du</p>
          </div>
          <h2>Was ist das SEO-Coaching?</h2>
          <p>
            Ein Coaching für Suchmaschinenoptimierung zielt darauf ab, Wissen
            und Fähigkeiten zu trainieren, sodass SEO-Maßnahmen selbst
            entwickelt und umgesetzt werden können. Kurz: Ein SEO-Coaching ist
            für alle, die SEO endlich verstehen und sich verbessern wollen.
          </p>
        </div>
        <div className="img_wrapper">
          <HomeCoaching />
        </div>
      </section>
      <div className="coaching_what_boxes">
        <article>
          <img src="/img/Remote-Icon.svg" alt="" />
          <h3>100% Remote</h3>
          <p>
            Für unser SEO-Coaching-Angebot nutzen wir Google Meet. Wenn du dein
            eigenes Tool nutzen willst (Zoom oder Teams), dann ist das ebenfalls
            problemlos möglich. Wenn gewünscht, zeichnen wir alle Meetings auf.
            Dadurch können die Coaching-Sessions auch im Nachgang weiterhin zum
            Arbeiten genutzt werden.
          </p>
        </article>
        <article>
          <img src="/img/Inhalte-Icon.svg" alt="" />
          <h3>Vollen Zugriff auf alle Inhalte</h3>
          <p>
            Auf alle Dokumente, die wir während der Zusammenarbeit nutzen oder
            erstellen, hast du ab dem ersten Tag lebenslangen Zugriff. Wir
            schalten dich für alles frei, was wir vorbereitet haben und was im
            weiteren Verlauf entsteht.
          </p>
        </article>
      </div>
    </>
  );
};

export default CoachingWhat;
