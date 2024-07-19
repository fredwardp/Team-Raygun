import React, { useEffect, useState } from "react";
import "./ScrollbarAnimation.css";

const ScrollbarAnimation = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".leistungen_phasen");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const startScroll = sectionTop - windowHeight * 0.9;
      const endScroll = sectionTop + sectionHeight - windowHeight * 0.9;

      if (scrollPosition > startScroll && scrollPosition < endScroll) {
        const totalScroll = endScroll - startScroll;
        const currentScroll = scrollPosition - startScroll;
        const scrollPercent = (currentScroll / totalScroll) * 100;
        setScrollPercentage(scrollPercent);
      } else if (scrollPosition <= startScroll) {
        setScrollPercentage(0);
      } else if (scrollPosition >= endScroll) {
        setScrollPercentage(100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollbar_animation_wrapper">
      <div className="sticks_wrapper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg_wrapper">
        <div
          className="scrollbar_animation"
          style={{
            background: `linear-gradient(to right, var(--accent-color-1), var(--accent-color-2) ${scrollPercentage}%, transparent ${scrollPercentage}%, transparent 100%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollbarAnimation;
