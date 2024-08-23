import "./CoachingHeader.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Kunden from "../../C_Leistungen/LeistungenHeader/Kunden";

const CoachingHeader = ({
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
      className="coaching_header"
      style={opacity > 0 ? { opacity: opacity } : { opacity: "0" }}
      ref={headerRef}
    >
      <div className="height_regulator">
        <article className="coaching_header_content container">
          <h1>SEO-Coaching für Unternehmen, Redakteure und Einzelpersonen</h1>
          <p className="coaching_sub">
            Mit einem individuellen SEO-Coaching hebst du deine Skills, oder die
            deines Teams, auf das nächste Level - egal ob Anfänger oder
            Fortgeschritten.
          </p>
          <div className="btn_gradient_bg">
            <Link to="kontakt" className="btn_gradient">
              Termin vereinbaren
            </Link>
          </div>
        </article>
      </div>
      <Kunden />
      <div className="header_bg_gradient"></div>
    </header>
  );
};

export default CoachingHeader;
