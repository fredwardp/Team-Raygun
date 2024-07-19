import { Link } from "react-router-dom";
import "./HeaderGradient.css";

const HeaderGradient = ({ subHeading, heading, span, text }) => {
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

      {text && text}
    </div>
  );
};

export default HeaderGradient;
