import { useState } from "react";
import Answer from "../answer/Answer";

const Question = ({
  title,
  answers,
  setNextQuestionId,
  type,
  handleAnswerSelection,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleNextQuestion = () => {
    if (type === "multiple-select" || type === "bubble") {
      handleAnswerSelection(selectedAnswers);
      setSelectedAnswers([]);
    }
  };

  const hasSelectedAnswers = selectedAnswers.length > 0;

  const isBubbleMaxSelected = type === "bubble" && selectedAnswers.length > 3;

  return (
    <li>
      <h3>{title}</h3>
      {type === "bubble" && <p>Select up to 3 answers</p>}
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
            />
          ))}
      </ul>
      {(type === "multiple-select" || type === "bubble") && (
        <button
          onClick={handleNextQuestion}
          disabled={!hasSelectedAnswers || isBubbleMaxSelected}
        >
          Next
        </button>
      )}
    </li>
  );
};

export default Question;
