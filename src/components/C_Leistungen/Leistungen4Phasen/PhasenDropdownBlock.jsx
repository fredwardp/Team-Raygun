import { useState } from "react";

const PhasenDropdownBlock = ({ data }) => {
  const [dataToggle, setDataToggle] = useState(false);
  return (
    <div className="phasen_dropdown_block">
      <div className="upper">
        <p></p>
        <h3></h3>
        <div></div>
      </div>
      <p></p>
    </div>
  );
};

export default PhasenDropdownBlock;
