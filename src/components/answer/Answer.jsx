import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { AnswersWrapper } from "./Answer.styled";

const Answer = ({
  emoji,
  questionId,
  text,
  handleAnswerSelection,
  type,
  setSelectedAnswers,
  selectedAnswers,
}) => {
  const { t } = useTranslation();

  const handleChange = () => {
    if (type === "multiple-select" || type === "bubble") {
      const updatedAnswers = [...selectedAnswers];
      const index = updatedAnswers.indexOf(text);
      if (index === -1) {
        updatedAnswers.push(text);
      } else {
        updatedAnswers.splice(index, 1);
      }
      setSelectedAnswers(updatedAnswers);
    } else {
      handleAnswerSelection(text);
    }
  };

  console.log(emoji);

  return (
    <div>
      {(type === "single-select" || type === "single-select-image") && (
        <AnswersWrapper onClick={handleChange} $emoji={emoji}>
          {emoji && <img src={emoji} height="52" width="52" />}
          <p>{t(text)}</p>
        </AnswersWrapper>
      )}
      {(type === "multiple-select" || type === "bubble") && (
        // <div>
        <label>
          {t(text)}
          <input
            type="checkbox"
            onChange={handleChange}
            checked={selectedAnswers.includes(text)}
          />
        </label>
        // </div>
      )}
    </div>
  );
};

export default Answer;
