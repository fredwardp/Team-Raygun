import { Link } from "react-router-dom";
import "./AgenturPublikationen.css";
import content from "./Publikationen.json";
import HomeLeistungenArrow from "../../../assets/Svg/HomeLeistungenArrow";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AgenturPublikationen = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <section className="publikationen" id="published">
      <h2>Publikationen</h2>
      <div className="content">
        {content.map((article, index) => (
          <article key={index}>
            <img src={article.img} alt={article.heading} />
            <div className="article_wrapper">
              <div>
                <h3>{article.heading}</h3>
                <p>{article.autor}</p>
              </div>

              <Link to={article.link} target="_blank">
                Zum Beitrag
                <HomeLeistungenArrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AgenturPublikationen;
