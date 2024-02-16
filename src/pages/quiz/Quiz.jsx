import { useEffect, useState } from "react";
import { getQuestionById } from "../../api/apiQuiz";
import { toast } from "react-toastify";
import Question from "../../components/question/Question";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [nextQuestionId, setNextQuestionId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestionById(nextQuestionId);
        setQuestion(response[0]);
        navigate(`/questions/${nextQuestionId}`);
      } catch (err) {
        toast.error("Oops, something went wrong! Try later!");
        console.log(err);
      }
    };
    fetchQuestions();
  }, [nextQuestionId, navigate]);

  return (
    <ul>
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
