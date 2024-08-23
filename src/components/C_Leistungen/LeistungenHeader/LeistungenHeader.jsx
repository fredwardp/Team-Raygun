import React, { useEffect, useRef, useState } from "react";
import "./LeistungenHeader.css";
import { Link } from "react-router-dom";
import Kunden from "./Kunden";

const LeistungenHeader = ({
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
      className="leistungen_header"
      style={opacity > 0 ? { opacity: opacity } : { opacity: "0" }}
      ref={headerRef}
    >
      <div className="height_regulator">
        <article className="leistungen_header_content container">
          <div className="sprungbtn_wrapper">
            <p className="sprungbtn" onClick={onVorteileClick}>
              Vorteile
            </p>
            <p className="sprungbtn" onClick={onLeistungenClick}>
              Leistungen
            </p>
            <p className="sprungbtn" onClick={onMethodeClick}>
              Methode
            </p>
          </div>
          <h1>Unsere Services für Dienstleister im B2B und B2C</h1>

          <div className="btn_gradient_bg">
            <Link to="kontakt" className="btn_gradient">
              Kontakt aufnehmen
            </Link>
          </div>
        </article>
      </div>
      <Kunden />
      <div className="header_bg_gradient"></div>
    </header>
  );
};

export default LeistungenHeader;
