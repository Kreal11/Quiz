import Answer from "../answer/Answer";

const Question = ({
  title,
  answers,
  setNextQuestionId,
  type,
  handleAnswerSelection,
}) => {
  return (
    <li>
      <h3>{title}</h3>
      <ul>
        {answers &&
          answers?.map((answer) => (
            <Answer
              handleAnswerSelection={handleAnswerSelection}
              type={type}
              setNextQuestionId={setNextQuestionId}
              {...answer}
              key={answer.id}
            />
          ))}
      </ul>
    </li>
  );
};

export default Question;
