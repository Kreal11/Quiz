import { useEffect, useState } from "react";
import { getQuestionById } from "../../api/apiQuiz";
import { toast } from "react-toastify";
import Question from "../../components/question/Question";
import { NavLink, useNavigate } from "react-router-dom";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  console.log(quizResults);
  const navigate = useNavigate();

  const getDefaultNextQuestionId = () => {
    const storedNextQuestionId = localStorage.getItem("nextQuestionId");
    return storedNextQuestionId ? parseInt(storedNextQuestionId, 10) : 1;
  };

  const [nextQuestionId, setNextQuestionId] = useState(
    getDefaultNextQuestionId
  );

  useEffect(() => {
    localStorage.setItem("nextQuestionId", nextQuestionId);
  }, [nextQuestionId]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        if (nextQuestionId > 5) {
          localStorage.setItem("quizData", JSON.stringify(quizResults));
          localStorage.removeItem("nextQuestionId");
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
  }, [nextQuestionId, navigate, quizResults]);

  const handleGoBack = () => {
    setNextQuestionId((prev) => prev - 1);
  };

  const handleAnswerSelection = (answer) => {
    setQuizResults([
      ...quizResults,
      { question: question.title, type: question.type, answer },
    ]);
    setNextQuestionId((prev) => prev + 1);
  };

  return (
    <ul>
      <NavLink onClick={handleGoBack}>Back</NavLink>
      {question && (
        <Question
          handleAnswerSelection={handleAnswerSelection}
          setNextQuestionId={setNextQuestionId}
          {...question}
          key={question.id}
        />
      )}
    </ul>
  );
};

export default Quiz;
