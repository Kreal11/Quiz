import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Answer = ({
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

  return (
    <div>
      {(type === "single-select" || type === "single-select-image") && (
        <>
          <p onClick={handleChange}>{t(text)}</p>
        </>
      )}
      {(type === "multiple-select" || type === "bubble") && (
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={selectedAnswers.includes(text)}
          />
          {t(text)}
        </label>
      )}
    </div>
  );
};

export default Answer;
