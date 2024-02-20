import { useState } from "react";
import Answer from "../answer/Answer";
import { Trans, useTranslation } from "react-i18next";
import {
  AnswersList,
  HateSpan,
  QuestionSupportHeader,
  QuestionsButton,
  QuestionsHeader,
  QuestionsWrapper,
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
  console.log(id);

  return (
    <li>
      {id > 1 && (
        <QuestionsWrapper>
          {id === 4 && (
            <QuestionsHeader>
              <Trans t={t} i18nKey="What do you hate the most in a book?">
                What do you <span style={{ color: "red" }}>hate</span> the most
                in a book?
              </Trans>
            </QuestionsHeader>
          )}
          {id !== 4 && <QuestionsHeader>{t(title)}</QuestionsHeader>}
          {support_text && (
            <QuestionSupportHeader>{support_text}</QuestionSupportHeader>
          )}
          <AnswersList
            $emoji={id === "2"}
            $age={id === "3"}
            $book={id === "4"}
            $topics={id === "5"}
          >
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
            <QuestionsButton
              onClick={handleNextQuestion}
              disabled={!hasSelectedAnswers || isBubbleMaxSelected}
            >
              {t("Next")}
            </QuestionsButton>
          )}
        </QuestionsWrapper>
      )}
    </li>
  );
};

export default Question;
