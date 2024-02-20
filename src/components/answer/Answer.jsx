import { useTranslation } from "react-i18next";
import {
  AnswersWrapper,
  CheckboxInput,
  Label,
  SvgChecked,
} from "./Answer.styled";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";

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

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setSelected(!selected);
    }, 0);
  };

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
        <AnswersWrapper onClick={handleChange} $emoji={emoji}>
          {emoji && <img src={emoji} height="52" width="52" />}
          <p>{t(text)}</p>
        </AnswersWrapper>
      )}
      {(type === "multiple-select" || type === "bubble") && (
        <Label onClick={handleClick} selected={selected}>
          {t(text)}
          <CheckboxInput
            $multiple={type === "multiple-select"}
            type="checkbox"
            onChange={handleChange}
            checked={selectedAnswers.includes(text)}
          />
          {type === "multiple-select" && (
            <SvgChecked>
              <use xlinkHref={`${sprite}#icon-checked`}></use>
            </SvgChecked>
          )}
        </Label>
      )}
    </div>
  );
};

export default Answer;
