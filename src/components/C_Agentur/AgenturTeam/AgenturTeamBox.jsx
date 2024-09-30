import { useState, useRef, useEffect } from "react";

const AgenturTeamBox = ({ data }) => {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 494);
  const contentRef = useRef(null);

  useEffect(() => {
    // Überprüfe Bildschirmgröße beim Mounten
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 494);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup-Funktion
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Aktualisiere die Höhe des Inhalts, wenn showContent sich ändert und im mobilen Zustand
    if (contentRef.current && isMobile) {
      contentRef.current.style.maxHeight = showContent
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [showContent, isMobile]);

  return (
    <div className="bg_wrapper" key={data.name}>
      <div className="member_wrapper">
        <img src={data.img} alt="team member image" />
        <article>
          <div className="header">
            <h3>
              {data.name} <span>{data.profession}</span>
            </h3>
          </div>
          <p
            onClick={() => setShowContent((prev) => !prev)}
            className="show_content"
          >
            {!showContent ? "Mehr erfahren" : "Weniger anzeigen"}
          </p>
          <div
            className="team_box_main"
            ref={contentRef}
            style={{
              maxHeight: isMobile ? "0px" : "none",
              overflow: "hidden",
              transition: "max-height 0.5s ease",
            }}
          >
            <p className="description">{data.description}</p>
            <div className="bullet_points">
              {data.bulletPoints.map((point, index) => (
                <p key={index}>
                  <span>{point.title}: </span> {point.text}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AgenturTeamBox;
