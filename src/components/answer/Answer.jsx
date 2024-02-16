import { NavLink } from "react-router-dom";

const Answer = ({ text, setNextQuestionId, type }) => {
  const handleNextQuestion = () => {
    setNextQuestionId((prev) => prev + 1);
  };

  return (
    <div>
      <NavLink onClick={handleNextQuestion}>{text}</NavLink>
    </div>
  );
};

export default Answer;
