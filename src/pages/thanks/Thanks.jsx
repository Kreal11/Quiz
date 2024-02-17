import { NavLink, useNavigate } from "react-router-dom";
import Quiz from "../quiz/Quiz";

const Thanks = () => {
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    localStorage.removeItem("quizData");
  };

  return (
    <div>
      <h3>Thanks</h3>
      <button>Download my answers</button>
      <NavLink to="/questions/1" onClick={handleRetakeQuiz}>
        Retake my quiz
      </NavLink>
    </div>
  );
};

export default Thanks;
