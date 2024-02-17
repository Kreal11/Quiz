import { NavLink } from "react-router-dom";

const Answer = ({ text, handleAnswerSelection, type }) => {
  const handleNextQuestion = () => {
    handleAnswerSelection(text);
  };

  const handleMultipleSelect = () => {
    // Мы не можем выбирать больше 3 ответов для типа 'bubble'
    if (type === "bubble" && handleAnswerSelection.length >= 3) {
      return;
    }
    handleAnswerSelection(text);
  };

  return (
    <div>
      {(type === "single-select" || type === "single-select-image") && (
        <NavLink onClick={handleNextQuestion}>{text}</NavLink>
      )}
      {type === "multiple-select" && (
        <label htmlFor={text}>
          <input type="checkbox" id={text} />
          {text}
        </label>
      )}
      {type === "bubble" && (
        <label htmlFor={text}>
          <input type="checkbox" id={text} />
          {text}
        </label>
      )}
    </div>
  );
};

export default Answer;
