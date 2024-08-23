import { Link } from "react-router-dom";
import "./HomeAI.css";
import { useState, useEffect } from "react";
import HomeAIBox1 from "../../../assets/Svg/HomeAIBox1";
import HomeAIBox2 from "../../../assets/Svg/HomeAIBox2";
import HomeAIBox4 from "../../../assets/Svg/HomeAIBox4";

const HomeAI = () => {
  const [aiBotAnimation, setAiBotAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const box3 = document.querySelector(".box3");
      const imgs = box3.querySelectorAll("img");

      const scrollY = window.scrollY;
      const box3Offset = box3.offsetTop;
      const windowHeight = window.innerHeight;

      if (
        scrollY + windowHeight >= box3Offset &&
        scrollY <= box3Offset + box3.offsetHeight
      ) {
        const scrollRatio =
          (scrollY + windowHeight - box3Offset) /
          (box3.offsetHeight + windowHeight);

        imgs.forEach((img, index) => {
          const movementFactor = index === 0 ? 60 : 40; // Unterschiedliche Geschwindigkeiten
          const movement = scrollRatio * movementFactor;
          img.style.transform =
            index === 0
              ? `translateY(-${movement}px)`
              : `translateY(${movement}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container home_ai">
      <div className="ai_header">
        <article>
          <div className="ai_color_bg">
            <p>Das neue Zeitalter der Suche</p>
          </div>
          <h2>Search meets AI</h2>
          <p className="ai_p">
            Die Art, wie wir online suchen und gefunden werden, hat ein neues
            Zeitalter erreicht.
          </p>
          <Link className="btn_white_gradient">Jetzt beraten lassen</Link>
        </article>
        <div className="ai_animation">
          <div
            className="ai_bot"
            onMouseEnter={() => setAiBotAnimation((prev) => !prev)}
            onMouseLeave={() => setAiBotAnimation((prev) => !prev)}
          >
            <div className="ai_bot_inner">
              <div className="ai_bot_face">
                <div className="ai_bot_eyes">
                  <div className="left_eye"></div>
                  <div className="right_eye"></div>
                </div>
                <div
                  className={
                    aiBotAnimation
                      ? "ai_bot_mouth ai_bot_mouth_open"
                      : "ai_bot_mouth ai_bot_mouth_close"
                  }
                >
                  <div className={aiBotAnimation ? "teeth" : "no_teeth"}></div>
                </div>
              </div>
            </div>
          </div>
          <img src="/img/home_ai_gemini.svg" alt="star" />
          <img src="/img/home_ai_gemini.svg" alt="star" />
          <img src="/img/home_ai_gemini.svg" alt="star" />
          <img src="/img/home_ai_gemini.svg" alt="star" />
          <img src="/img/home_ai_gemini.svg" alt="star" />
          <img src="/img/home_ai_gemini.svg" alt="star" />
        </div>
      </div>
      <div className="ai_grid">
        <div className="box1">
          <HomeAIBox1 />
          <h3>Vertrauen</h3>
          <p>
            Menschen kaufen von vertrauenswürdigen Unternehmen. Suchmaschinen
            und KI in jeglicher Form, müssen vertrauenswürdige Unternehmen
            algorithmisch erkennen. In Zeiten von Fake-News, Deep-Fakes und
            KI-Content, ist das eine der größten Herausforderungen im digitalen
            Marketing.
          </p>
        </div>
        <div className="box2">
          <HomeAIBox2 />
          <h3>Markenautorität</h3>
          <p>
            Eine digitale Markenautorität ist eine Unternehmensmarke, die von
            Suchmaschinen und KI-Modellen als vertrauenswürdig, fachkundig und
            relevant für ein bestimmtes Themenfeld eingestuft und als Quelle
            herangezogen wird. Unsere Mission ist es, euch als Unternehmen genau
            dorthin zu bringen.
          </p>
        </div>
        <div className="box3">
          <img src="/img/home_ai_box3_cash.svg" alt="cash" />
          <img src="/img/home_ai_box3_dollar.svg" alt="dollar" />
          <h3>Mehr Umsatz, weniger Klicks</h3>
          <p>
            Die Suche verlagert sich. Allgemeine Ratgeberartikel, die bereits
            vorhandenes Wissen neu aufwärmen, haben ausgedient, denn eine
            generative KI kann Nutzerfragen effektiver beantworten. Das kann zu
            weniger Klicks auf einer Website führen. Gleichzeitig wird der Kauf
            bzw. die Kontaktanfrage weiterhin auf Websites von Unternehmen
            stattfinden. Umsatzrelevante Suchanfragen werden stärker und
            wichtiger werden.
          </p>
        </div>
        <div className="box4">
          <HomeAIBox4 />
          <h3>Digitaler Fußabdruck</h3>
          <p>
            Es reicht nicht mehr aus, nur auf der eigenen Website stattzufinden.
            Eine KI wird nicht lernen, wer ich bin, und eine Suchmaschine wird
            mich nicht als vertrauenswürdig einstufen, wenn mein Unternehmen
            nicht im Internet erwähnt wird. Wenn mein Unternehmen Expertise hat
            und gut in dem ist, was es tut, dann müssen andere Quellen das
            bestätigen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAI;
