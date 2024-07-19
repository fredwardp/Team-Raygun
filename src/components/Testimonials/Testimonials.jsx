import { useState } from "react";
import "./Testimonials.css";
import content from "./Testimonials.json";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [slideWidth, setSlideWidth] = useState(0);

  const sliderHandler = (direction) => {
    if (direction === "left") {
      setSlideWidth((prev) => prev + 880);
    } else if (direction === "right") {
      setSlideWidth((prev) => prev - 880);
    }
  };

  return (
    <section className="testimonials">
      <div className="top_stroke"></div>
      <h2>Das sagen unsere Partner</h2>
      <div
        className="content"
        style={{ transform: `translateX(${slideWidth}px)` }}
      >
        {content.map((data, index) => (
          <Testimonial data={data} key={index} />
        ))}
      </div>
      <div className="arrows">
        <div onClick={() => sliderHandler("left")}>
          <img src="/img/arrow_left.svg" alt="" />
        </div>
        <div onClick={() => sliderHandler("right")}>
          <img src="/img/arrow_right.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
