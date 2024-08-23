import "./AgenturHeader.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Kunden from "../../C_Leistungen/LeistungenHeader/Kunden";

const AgenturHeader = ({
  onVorteileClick,
  onLeistungenClick,
  onMethodeClick,
}) => {
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
      className="agentur_header"
      style={opacity > 0 ? { opacity: opacity } : { opacity: "0" }}
      ref={headerRef}
    >
      <div className="height_regulator">
        <article className="agentur_header_content container">
          <h1>Wir sind Team Raygun</h1>
          <p>Inbound-Marketing Agentur</p>
          <div className="home_header_btns">
            <div className="btn_gradient_bg">
              <Link to="kontakt/potenzialanalyse" className="btn_gradient">
                Kostenlose Potenzialanalyse
              </Link>
            </div>
            <div className="btn_gradient_bg">
              <Link
                to="kontakt/projektanfrage"
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

export default AgenturHeader;
