import { Link } from "react-router-dom";
import "./HeaderGradient.css";

const HeaderGradient = ({ subHeading, heading, span, text, heading2 }) => {
  return (
    <div className="header_gradient">
      <div className="gradient_opacity_wrapper">
        <div></div>
        <p>{subHeading}</p>
      </div>
      {typeof heading === "object" ? (
        heading
      ) : (
        <h2>
          {heading} {span && <span> {span}</span>}
        </h2>
      )}
      {heading2 && <h2 style={{ marginTop: "-20px" }}>{heading2}</h2>}

      {text && text}
    </div>
  );
};

export default HeaderGradient;
