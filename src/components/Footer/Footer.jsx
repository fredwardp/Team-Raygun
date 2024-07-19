import { Link } from "react-router-dom";
import "./Footer.css";
import FooterLogo from "../../assets/Svg/FooterLogo";
import content from "./FooterSiteMap.json";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer_content_wrapper">
        <Link className="footer_logo" to="/">
          <FooterLogo />
        </Link>
        <div className="footer_content">
          <article>
            <h2>Kontakt</h2>

            <a className="footer_phone" href="tel:+491623361419">
              <p className="phone_number">+49 1623361419</p>
              <p className="phone_infos">Anrufe & Whatsapp möglich</p>
            </a>
            <p>The Digital Raygun GmbH</p>
            <p className="footer_adress">
              Christine-Koch-Str. 3 59269 Beckum Deutschland
            </p>
            <a href="mailto: hallo@digitalraygun.de">hallo@digitalraygun.de</a>
          </article>
          <article>
            <h2>Sitemap</h2>
            {content.map((data) => (
              <Link key={data.name} to={data.link}>
                {data.name}
              </Link>
            ))}
          </article>
          <article>
            <h2>Socials</h2>
            <a href="">LinkedIn</a>
          </article>
        </div>
      </div>
      <div className="footer_bottom">
        <p>All rights reserved 2024 © Team Raygun GmbH</p>
        <div>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutzerklärung</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
