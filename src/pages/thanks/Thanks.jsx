import { NavLink } from "react-router-dom";

const Thanks = () => {
  const handleRetakeQuiz = () => {
    localStorage.removeItem("quizData");
  };

  const handleDownloadAnswers = () => {
    const quizResults = JSON.parse(localStorage.getItem("quizData")) || {};
    let csvContent =
      "Order|                                 Title                                    |                   Type                 |   Answer    |\n";
    Object.keys(quizResults).forEach((key, index) => {
      const item = quizResults[key];
      if (key === "email") {
        csvContent += `6        |    Email    |    email    |${item}    |\n`;
      } else {
        const order = index + 1;
        csvContent += `${order}        |${item.question}            |${item.type}          |${item.answer}    |\n`;
      }
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
    link.setAttribute("download", "quiz_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h3>Thanks</h3>
      <button onClick={handleDownloadAnswers}>Download my answers</button>
      <NavLink to="/questions/1" onClick={handleRetakeQuiz}>
        Retake my quiz
      </NavLink>
    </div>
  );
};

export default Thanks;
