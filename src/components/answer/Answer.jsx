import { useTranslation } from "react-i18next";
import {
  AnswersWrapper,
  CheckboxInput,
  Label,
  SvgChecked,
} from "./Answer.styled";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import action from "../../assets/images/action.png";
import werewolf from "../../assets/images/werewolf.png";
import bad_boy from "../../assets/images/bad_boy.png";
import billionaire from "../../assets/images/billionaire.png";
import royal_obsession from "../../assets/images/royal_obsession.png";
import young_adult from "../../assets/images/young_adult.png";
import romance from "../../assets/images/romance.png";

const imagePaths = {
  action: action,
  werewolf: werewolf,
  bad_boy: bad_boy,
  billionaire: billionaire,
  royal_obsession: royal_obsession,
  young_adult: young_adult,
  romance: romance,
};

const Answer = ({
  img,
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
    <li>
      {(type === "single-select" || type === "single-select-image") && (
        <AnswersWrapper onClick={handleChange} $emoji={emoji}>
          {emoji && <img src={emoji} height="52" width="52" />}
          <p>{t(text)}</p>
        </AnswersWrapper>
      )}
      {(type === "multiple-select" || type === "bubble") && (
        <Label
          onClick={handleClick}
          selected={selected}
          $bubble={type === "bubble"}
        >
          {type === "bubble" && <img src={imagePaths[img]} />}
          {t(text)}
          <CheckboxInput
            $bubble={type === "bubble"}
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
    </li>
  );
};

export default Answer;
