import "./AgenturTimeline.css";
import React, { useEffect, useRef, useState } from "react";
import content from "./AgenturTimeline.json";
const AgenturTimeline = () => {
  const sectionRef = useRef(null);
  const circleRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkPosition = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is in the upper part or center of the viewport
      return rect.top >= 0 && rect.top <= windowHeight / 2;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            circleRefs.current.forEach((circle) => {
              if (circle && checkPosition(circle)) {
                circle.classList.add("circle_gradient");
              } else if (circle) {
                circle.classList.remove("circle_gradient");
              }
            });
          } else {
            setIsVisible(false);
            circleRefs.current.forEach((circle) => {
              if (circle) {
                circle.classList.remove("circle_gradient");
              }
            });
          }
        });
      },
      {
        threshold: Array.from(Array(101).keys(), (i) => i / 100),
        root: null,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="agentur_timeline">
      <div className="heading_wrapper">
        <h2>Unsere Story</h2>
      </div>
      <div className="scroll_animation">
        <div className="circle" ref={(el) => (circleRefs.current[0] = el)}>
          <div></div>
        </div>
        <div className="line"></div>
        <div className="circle" ref={(el) => (circleRefs.current[1] = el)}>
          <div></div>
        </div>
        <div className="line"></div>
        <div className="circle" ref={(el) => (circleRefs.current[3] = el)}>
          <div></div>
        </div>
        <div className="line"></div>
        <div className="circle" ref={(el) => (circleRefs.current[4] = el)}>
          <div></div>
        </div>
        <div className="line"></div>
        <div className="circle" ref={(el) => (circleRefs.current[5] = el)}>
          <div></div>
        </div>
        <div className="background_div"></div>
        <div className={isVisible ? "color_gradient" : ""}></div>
      </div>
      <div className="content">
        {content.map((data, index) => (
          <article key={index}>
            <p className="year">{data.year}</p>
            <p>{data.text}</p>
            {/* {index === 2 && <div className="background_div"></div>} */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AgenturTimeline;
