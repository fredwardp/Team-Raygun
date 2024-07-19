import { useState } from "react";
import "./QuestionBlock.css";

const QuestionBlock = ({ data }) => {
  const [answerToggle, setAnswerToggle] = useState(false);
  return (
    <div className="question_block">
      <div className={`inner ${answerToggle ? "opened_inner" : "close_inner"}`}>
        <div className="faq_content">
          <h3>{data.question}</h3>
          <div
            onClick={() => setAnswerToggle((prev) => !prev)}
            className="answer_toggle"
          >
            <div className="linear"></div>
            <div
              className={`horizontal ${answerToggle ? "closed" : "open"}`}
            ></div>
          </div>
        </div>
        <p className={answerToggle ? "show_answer" : "hide_answer"}>
          {data.answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionBlock;
