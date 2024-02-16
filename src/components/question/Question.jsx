import Answer from "../answer/Answer";

const Question = ({ title, answers, setNextQuestionId }) => {
  return (
    <li>
      <h3>{title}</h3>
      <ul>
        {answers &&
          answers?.map((answer) => (
            <Answer
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
