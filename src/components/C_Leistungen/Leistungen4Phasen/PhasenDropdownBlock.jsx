import { useState } from "react";

const PhasenDropdownBlock = ({ data }) => {
  const [dataToggle, setDataToggle] = useState(false);
  console.log(data);
  return (
    <div className="phasen_dropdown_block">
      <div className={`inner ${dataToggle ? "opened_inner" : "close_inner"}`}>
        <div className="upper">
          <div className="content">
            <p>{data.number}</p>
            <h3>{data.heading}</h3>
          </div>
          <div
            onClick={() => setDataToggle((prev) => !prev)}
            className="answer_toggle"
          >
            <div className="linear"></div>
            <div
              className={`horizontal ${dataToggle ? "closed" : "open"}`}
            ></div>
          </div>
        </div>
        <p
          className={`lower_text ${dataToggle ? "show_answer" : "hide_answer"}`}
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default PhasenDropdownBlock;
