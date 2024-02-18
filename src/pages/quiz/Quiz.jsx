import { useEffect, useState } from "react";
import { getQuestionById } from "../../api/apiQuiz";
import { toast } from "react-toastify";
import Question from "../../components/question/Question";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  console.log(quizResults);
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t, i18n } = useTranslation();

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
    const updatedResults = { ...quizResults };

    updatedResults[question.title] = {
      answer: answer,
      type: question.type,
    };

    setQuizResults(updatedResults);
    setNextQuestionId((prev) => prev + 1);
  };

  const changeLanguage = (lng) => {
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <ul>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("de")}>German</button>
        <button onClick={() => changeLanguage("fr")}>French</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
      </div>
      {nextQuestionId > 1 && <NavLink onClick={handleGoBack}>Back</NavLink>}
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
