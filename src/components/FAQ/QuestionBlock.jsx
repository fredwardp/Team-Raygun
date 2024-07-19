import { useState, useRef, useEffect } from "react";
import "./QuestionBlock.css";

const QuestionBlock = ({ data }) => {
  const [answerToggle, setAnswerToggle] = useState(false);
  const answerRef = useRef(null);
  let timeoutId;

  const handleToggle = () => {
    const answerElement = answerRef.current;

    if (answerToggle) {
      answerElement.classList.remove("show_answer");
      answerElement.classList.add("hide_answer");

      timeoutId = setTimeout(() => {
        if (answerElement) {
          answerElement.style.display = "none";
        }
      }, 400);
    } else {
      answerElement.classList.remove("hide_answer");
      answerElement.style.display = "block";
      answerElement.classList.add("show_answer");
    }

    setAnswerToggle((prev) => !prev);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="question_block">
      <div className={`inner ${answerToggle ? "opened_inner" : "close_inner"}`}>
        <div className="faq_content">
          <h3>{data.question}</h3>
          <div onClick={handleToggle} className="answer_toggle">
            <div className="linear"></div>
            <div
              className={`horizontal ${answerToggle ? "closed" : "open"}`}
            ></div>
          </div>
        </div>
        <p
          ref={answerRef}
          className={`answer ${answerToggle ? "show_answer" : "hide_answer"}`}
        >
          {data.answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionBlock;
