import { NavLink, useNavigate, useParams } from "react-router-dom";

const Answer = ({ text, setNextQuestionId }) => {
  const { id } = useParams();

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
