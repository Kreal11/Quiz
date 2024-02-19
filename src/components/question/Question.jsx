import { useState } from "react";
import Answer from "../answer/Answer";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

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
          <h3>{t(title)}</h3>
          {support_text && <h4>{support_text}</h4>}
          <ul>
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
          </ul>
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
