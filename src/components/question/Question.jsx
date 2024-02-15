import Answer from "../answer/Answer";

const Question = ({ title, answers }) => {
  return (
    <li>
      <h3>{title}</h3>
      <ul>
        {answers &&
          answers?.map((answer) => <Answer {...answer} key={answer.id} />)}
      </ul>
    </li>
  );
};

export default Question;
