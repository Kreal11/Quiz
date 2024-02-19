import { useEffect, useState } from "react";
import { getQuestionById } from "../../api/apiQuiz";
import { toast } from "react-toastify";
import Question from "../../components/question/Question";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LanguageLiNavLinkWrapper,
  LanguageNavLink,
  LanguageQuestionWrapper,
  QuestionHeader,
  QuizWrapper,
  SvgBackArrow,
} from "./Quiz.styled";
import sprite from "../../assets/sprite.svg";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  console.log(quizResults);
  const navigate = useNavigate();
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

  const changeLanguage = (lng, languageName) => {
    i18n.changeLanguage(lng);
    const updatedResults = { ...quizResults };
    updatedResults["What is your preferred language?"] = {
      answer: languageName,
      type: "single-select",
    };
    setQuizResults(updatedResults);

    setNextQuestionId((prev) => prev + 1);
  };

  return (
    <QuizWrapper>
      {nextQuestionId === 1 && (
        <LanguageQuestionWrapper>
          <QuestionHeader>
            {t("What is your preferred language?")}
          </QuestionHeader>
          <h4>Choose language</h4>
          <LanguageLiNavLinkWrapper>
            <LanguageNavLink onClick={() => changeLanguage("en", "English")}>
              {t("English")}
            </LanguageNavLink>
            <LanguageNavLink onClick={() => changeLanguage("de", "German")}>
              {t("German")}
            </LanguageNavLink>
            <LanguageNavLink onClick={() => changeLanguage("fr", "French")}>
              {t("French")}
            </LanguageNavLink>
            <LanguageNavLink onClick={() => changeLanguage("es", "Spanish")}>
              {t("Spanish")}
            </LanguageNavLink>
          </LanguageLiNavLinkWrapper>
        </LanguageQuestionWrapper>
      )}

      {nextQuestionId > 1 && (
        <>
          <NavLink onClick={handleGoBack}>
            <SvgBackArrow>
              <use xlinkHref={`${sprite}#icon-back`}></use>
            </SvgBackArrow>
          </NavLink>
          <ul>
            {question && (
              <Question
                handleAnswerSelection={handleAnswerSelection}
                setNextQuestionId={setNextQuestionId}
                {...question}
                key={question.id}
              />
            )}
          </ul>
        </>
      )}
    </QuizWrapper>
  );
};

export default Quiz;
