import React, { useEffect, useRef, useState } from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
import Kunden from "../../C_Leistungen/LeistungenHeader/Kunden";

const HomeHeader = () => {
  const [opacity, setOpacity] = useState(1); // Initial opacity is 1
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate the opacity based on the header's position
        const newOpacity =
          2 - Math.max(0, (windowHeight - headerTop) / windowHeight);
        setOpacity(newOpacity);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll initially in case the header is already partially scrolled out
    handleScroll();

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="home_header"
      style={opacity > 0 ? { opacity: opacity } : { opacity: "0" }}
      ref={headerRef}
    >
      <div className="home_hero_bg_wrapper">
        <img src="/img/home_hero_bg.svg" alt="" />
      </div>
      <div className="height_regulator">
        <article className="home_header_content container">
          <h1>Beam me up</h1>
          <p>
            Deine Inbound-Marketing-Agentur für starke Kundenbindung und
            nachhaltiges Wachstum
          </p>
          <div className="home_header_btns">
            <div className="btn_gradient_bg">
              <Link to="kontakt/potenzialanalyse" className="btn_gradient">
                Kostenlose Potenzialanalyse
              </Link>
            </div>
            <div className="btn_gradient_bg">
              <Link
                to="kontakt/zusammenarbeit"
                className="btn_gradient btn_dark"
              >
                Projektanfrage senden
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Kunden />
      <div className="header_bg_gradient"></div>
    </header>
  );
};

export default HomeHeader;
