import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  console.log(hamburgerToggle);
  return (
    <nav>
      <div className="nav_container container">
        <Link to="/">
          <img className="nav_logo" src="/img/nav_logo.svg" alt="" />
        </Link>
        <div className="link_wrapper">
          <Link to="/">Startseite</Link>
          <Link to="/leistungen">Leistungen</Link>
          <Link to="/coaching">SEO-Coaching</Link>
          <Link to="/casestudies">Case Studies</Link>
          <Link to="/agentur">Agentur</Link>
        </div>
        <Link to="/kontakt/projektanfrage" className="nav_btn">
          Kontakt aufnehmen
        </Link>
        <div
          className="hamburger_menu"
          onClick={() => setHamburgerToggle((prev) => !prev)}
        >
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
    </nav>
  );
};

export default Nav;
