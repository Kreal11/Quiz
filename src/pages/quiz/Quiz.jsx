import { useEffect, useState } from "react";
import { getAllQuestions } from "../../api/apiQuiz";
import { toast } from "react-toastify";
import Question from "../../components/question/Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await getAllQuestions();
        setQuestions(response);
        console.log(response);
      } catch (err) {
        toast.error("Oops, something went wrong! Try later!");
        console.log(err);
      }
    };
    getQuestions();
  }, []);

  return (
    <ul>
      {questions &&
        questions?.map((question) => (
          <Question {...question} key={question.id} />
        ))}
    </ul>
  );
};

export default Quiz;
