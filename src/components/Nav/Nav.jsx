import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  useEffect(() => {
    if (hamburgerToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hamburgerToggle]);

  const handleHamburgerToggle = () => {
    setHamburgerToggle((prev) => !prev);
  };

  return (
    <nav>
      <div className="nav_container container">
        <Link to="/">
          <img className="nav_logo" src="/img/nav_logo.svg" alt="" />
        </Link>
        <div className="link_wrapper">
          <NavLink to="/">Startseite</NavLink>
          <NavLink to="/leistungen">Leistungen</NavLink>
          <NavLink to="/coaching">SEO-Coaching</NavLink>
          <NavLink to="/casestudies">Case Studies</NavLink>
          <NavLink to="/agentur">Agentur</NavLink>
        </div>
        <Link to="/kontakt/projektanfrage" className="btn_gradient nav_btn">
          Kontakt aufnehmen
        </Link>
        <div className="hamburger_menu" onClick={handleHamburgerToggle}>
          <div
            className={`long ${
              hamburgerToggle ? "long_top_open" : "long_top_close"
            }`}
          ></div>
          <div
            className={`short ${
              hamburgerToggle ? "short_open" : "short_close"
            }`}
          ></div>
          <div
            className={`long ${
              hamburgerToggle ? "long_bottom_open" : "long_bottom_close"
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile_menu ${hamburgerToggle ? "open" : "closed"}`}>
        <Link to="/" className="fade_link" onClick={handleHamburgerToggle}>
          Startseite
        </Link>
        <Link
          to="/leistungen"
          className="fade_link"
          onClick={handleHamburgerToggle}
        >
          Leistungen
        </Link>
        <Link
          to="/coaching"
          className="fade_link"
          onClick={handleHamburgerToggle}
        >
          SEO-Coaching
        </Link>
        <Link
          to="/casestudies"
          className="fade_link"
          onClick={handleHamburgerToggle}
        >
          Case Studies
        </Link>
        <Link
          to="/agentur"
          className="fade_link"
          onClick={handleHamburgerToggle}
        >
          Agentur
        </Link>
        <Link
          to="/kontakt/projektanfrage"
          className="btn_gradient nav_btn fade_link"
          onClick={handleHamburgerToggle}
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
