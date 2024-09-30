import React, { useEffect, useRef, useState } from "react";
import "./LeistungenHeader.css";
import { Link } from "react-router-dom";
import Kunden from "./Kunden";

const LeistungenHeader = ({
  onVorteileClick,
  onLeistungenClick,
  onMethodeClick,
}) => {
  const [opacity, setOpacity] = useState(1);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const newOpacity =
          2 - Math.max(0, (windowHeight - headerTop) / windowHeight);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
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
            <Link to="/kontakt/projektanfrage" className="btn_gradient">
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
