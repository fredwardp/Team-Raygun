import { useState, useEffect } from "react";
import FlyWheel2 from "../../../assets/Svg/FlyWheel2";
import "./Leistungen4Phasen.css";
import content from "./Leistungen4Phasen.json";
import ScrollbarAnimation from "./ScrollbarAnimation";

const Leistungen4Phasen = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".leistungen_phasen");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        scrollPosition + windowHeight > sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const relativeScroll = scrollPosition + windowHeight - sectionTop;
        const scrollPercentage =
          relativeScroll / (sectionHeight + windowHeight);

        // Adjusted to start from 11% and go to 100%
        const effectiveScrollPercentage = (scrollPercentage - 0) / 1;

        if (effectiveScrollPercentage >= 0 && effectiveScrollPercentage <= 1) {
          const newIndex = Math.min(
            Math.floor(effectiveScrollPercentage * content.length),
            content.length - 1
          );
          if (newIndex !== animationIndex) {
            setPrevIndex(animationIndex);
            setAnimationIndex(newIndex);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationIndex]);

  return (
    <section className="leistungen_phasen container">
      {animationIndex > 0 && <ScrollbarAnimation />}

      <div className="phasen_content_wrapper">
        {content.map((slideInfo, index) => (
          <article key={index}>
            <>
              {slideInfo.content.h2 && <h2>{slideInfo.content.h2}</h2>}
              {slideInfo.content.number && (
                <div className="header_gradient">
                  <div className="gradient_opacity_wrapper">
                    <div></div>
                    <p>{slideInfo.content.number}</p>
                  </div>
                </div>
              )}
              {slideInfo.content.h3 && <h3>{slideInfo.content.h3}</h3>}
              {slideInfo.content.p && <p>{slideInfo.content.p}</p>}
              {slideInfo.content.p2 && (
                <div class="phasen_stars_wrapper">
                  {slideInfo.content.p2.map((line, index) => (
                    <div key={index}>
                      <img src="/img/leistungen_phasen_star.svg" alt="star" />
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </>
          </article>
        ))}
      </div>
      <div className="phasen_wrapper">
        <FlyWheel2
          data={content[animationIndex].flyWheel}
          animationIndex={animationIndex}
        />
      </div>
      {/* <div className="shadow_div top"></div> */}
      <div className="shadow_div bottom"></div>
    </section>
  );
};

export default Leistungen4Phasen;
