import { useState } from "react";
import Answer from "../answer/Answer";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  AnswersList,
  OtherQuestionsHeader,
  QuestionSupportHeader,
} from "./Question.styled";

const Question = ({
  id,
  title,
  support_text,
  answers,
  setNextQuestionId,
  type,
  handleAnswerSelection,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const { t } = useTranslation();
  const handleNextQuestion = () => {
    if (type === "multiple-select" || type === "bubble") {
      handleAnswerSelection(selectedAnswers);
      setSelectedAnswers([]);
    }
  };

  const hasSelectedAnswers = selectedAnswers.length > 0;

  const isBubbleMaxSelected = type === "bubble" && selectedAnswers.length > 3;

  // const handleChangeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <li>
      {id > 1 && (
        <>
          <OtherQuestionsHeader>{t(title)}</OtherQuestionsHeader>
          {support_text && (
            <QuestionSupportHeader>{support_text}</QuestionSupportHeader>
          )}
          <AnswersList $emoji={id === "2"} $age={id === "3"}>
            {answers &&
              answers?.map((answer) => (
                <Answer
                  setSelectedAnswers={setSelectedAnswers}
                  selectedAnswers={selectedAnswers}
                  handleAnswerSelection={handleAnswerSelection}
                  type={type}
                  setNextQuestionId={setNextQuestionId}
                  {...answer}
                  key={answer.id}
                  questionId={id}
                />
              ))}
          </AnswersList>
          {(type === "multiple-select" || type === "bubble") && (
            <button
              onClick={handleNextQuestion}
              disabled={!hasSelectedAnswers || isBubbleMaxSelected}
            >
              {t("Next")}
            </button>
          )}
        </>
      )}
    </li>
  );
};

export default Question;
