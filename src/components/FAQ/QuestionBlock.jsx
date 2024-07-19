import { useState } from "react";
import "./QuestionBlock.css";

const QuestionBlock = ({ data }) => {
  const [answerToggle, setAnswerToggle] = useState(false);

  const handleToggle = () => {
    const answerElement = document.querySelector(".answer");
    if (answerToggle) {
      answerElement.classList.remove("show_answer");
      answerElement.classList.add("hide_answer");

      // Use a timeout to set display: none after the animation completes
      setTimeout(() => {
        answerElement.style.display = "none";
      }, 400); // Match this duration with the closeanswer animation duration
    } else {
      answerElement.classList.remove("hide_answer");
      answerElement.style.display = "block"; // Show the element before starting the animation
      answerElement.classList.add("show_answer");
    }

    setAnswerToggle((prev) => !prev);
  };

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
        <p className={`answer ${answerToggle ? "show_answer" : "hide_answer"}`}>
          {data.answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionBlock;
