import { NavLink } from "react-router-dom";

const Answer = ({ text, setNextQuestionId, handleAnswerSelection }) => {
  const handleNextQuestion = () => {
    handleAnswerSelection(text);
  };

  return (
    <div>
      <NavLink onClick={handleNextQuestion}>{text}</NavLink>
    </div>
  );
};

export default Answer;
