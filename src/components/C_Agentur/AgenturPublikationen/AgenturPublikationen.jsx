import { Link } from "react-router-dom";
import "./AgenturPublikationen.css";
import content from "./Publikationen.json";
import HomeLeistungenArrow from "../../../assets/Svg/HomeLeistungenArrow";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AgenturPublikationen = () => {
  const location = useLocation();
  const [sliderCounter, setSliderCounter] = useState(0);
  const [sliderMover, setSliderMover] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const sliderHandler = (direction) => {
    if (sliderCounter === 0 && direction === "left") {
      return;
    } else if (sliderCounter < content.length - 1 && direction === "right") {
      setSliderCounter((prev) => prev + 1);
      setSliderMover((prev) => prev - 100); // Adjust based on slider item width
    } else if (sliderCounter > 0 && direction === "left") {
      setSliderCounter((prev) => prev - 1);
      setSliderMover((prev) => prev + 100); // Adjust based on slider item width
    }
  };

  return (
    <section className="publikationen" id="published">
      <h2>Publikationen</h2>
      <div
        className="content"
        style={{ transform: `translateX(${sliderMover}%)` }}
      >
        {content.map((article, index) => (
          <article key={index} className="glassmorph">
            <img src={article.img} alt={article.heading} />
            <div className="article_wrapper">
              <div>
                <h3>{article.heading}</h3>
                <p>{article.autor}</p>
              </div>

              <Link className="arrow_link" to={article.link} target="_blank">
                Zum Beitrag
                <HomeLeistungenArrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="arrows">
        <div onClick={() => sliderHandler("left")}>
          <img src="/img/arrow_left.svg" alt="Left Arrow" />
        </div>
        <div onClick={() => sliderHandler("right")}>
          <img src="/img/arrow_right.svg" alt="Right Arrow" />
        </div>
      </div>
    </section>
  );
};

export default AgenturPublikationen;
