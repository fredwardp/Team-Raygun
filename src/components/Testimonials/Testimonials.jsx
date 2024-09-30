import { useState, useEffect } from "react";
import "./Testimonials.css";
import content from "./Testimonials.json";
import Testimonial from "./Testimonial";

const shuffleArray = (array) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

const Testimonials = () => {
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideCounter, setSlideCounter] = useState(19);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
  const [shuffledContent, setShuffledContent] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderHandler = (direction) => {
    if (direction === "left" && slideCounter < 38) {
      setSlideWidth((prev) => prev + (isMobile ? window.innerWidth : 880));
      setSlideCounter((prev) => prev + 1);
    } else if (direction === "right" && slideCounter > 0) {
      setSlideWidth((prev) => prev - (isMobile ? window.innerWidth : 880));
      setSlideCounter((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setShuffledContent(shuffleArray(content));
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="top_stroke"></div>
      <h2>Das sagen unsere Partner</h2>
      <div
        className="content"
        style={{ transform: `translateX(${slideWidth}px)` }}
      >
        {shuffledContent.map((data, index) => (
          <Testimonial data={data} key={index} />
        ))}
        {shuffledContent.map((data, index) => (
          <Testimonial data={data} key={index} />
        ))}
        {shuffledContent.map((data, index) => (
          <Testimonial data={data} key={index} />
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

export default Testimonials;
