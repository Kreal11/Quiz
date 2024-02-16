import { useEffect, useState } from "react";
import { getQuestionById } from "../../api/apiQuiz";
import { toast } from "react-toastify";
import Question from "../../components/question/Question";
import { NavLink, useNavigate } from "react-router-dom";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [nextQuestionId, setNextQuestionId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        if (nextQuestionId > 5) {
          navigate("/loader");
        } else {
          const response = await getQuestionById(nextQuestionId);
          setQuestion(response[0]);
          navigate(`/questions/${nextQuestionId}`);
        }
      } catch (err) {
        toast.error("Oops, something went wrong! Try later!");
        console.log(err);
      }
    };
    fetchQuestions();
  }, [nextQuestionId, navigate]);

  const handleGoBack = () => {
    setNextQuestionId((prev) => prev - 1);
  };

  return (
    <ul>
      <NavLink onClick={handleGoBack}>Back</NavLink>
      {question && (
        <Question
          setNextQuestionId={setNextQuestionId}
          {...question}
          key={question.id}
        />
      )}
    </ul>
  );
};

export default Quiz;
