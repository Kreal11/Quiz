import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  AnswersWrapper,
  CheckboxInput,
  Label,
  SvgChecked,
} from "./Answer.styled";
import { useState } from "react";
import action from "../../assets/images/emoji/action.png";
import werewolf from "../../assets/images/emoji/werewolf.png";
import bad_boy from "../../assets/images/emoji/bad_boy.png";
import billionaire from "../../assets/images/emoji/billionaire.png";
import royal_obsession from "../../assets/images/emoji/royal_obsession.png";
import young_adult from "../../assets/images/emoji/young_adult.png";
import romance from "../../assets/images/emoji/romance.png";
import sprite from "../../assets/sprite/sprite.svg";

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
          {emoji && (
            <img src={emoji} height="52" width="52" alt="gender emoji" />
          )}
          <p>{t(text)}</p>
        </AnswersWrapper>
      )}
      {(type === "multiple-select" || type === "bubble") && (
        <Label
          onClick={handleClick}
          selected={selected}
          $bubble={type === "bubble"}
        >
          {type === "bubble" && (
            <img src={imagePaths[img]} alt={`${img} emoji`} />
          )}
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
              <svg>
                <use xlinkHref={`${sprite}#icon-checked`} />
              </svg>
            </SvgChecked>
          )}
        </Label>
      )}
    </li>
  );
};

export default Answer;

Answer.propTypes = {
  img: PropTypes.string,
  emoji: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleAnswerSelection: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setSelectedAnswers: PropTypes.func.isRequired,
  selectedAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
