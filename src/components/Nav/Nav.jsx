import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
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
        <Link to="/kontakt" className="nav_btn">
          Kontakt aufnehmen
        </Link>
        <div className="hamburger_menu">
          <div className="long"></div>
          <div className="short"></div>
          <div className="long"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
