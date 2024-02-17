import { NavLink } from "react-router-dom";

const Thanks = () => {
  const handleRetakeQuiz = () => {
    localStorage.removeItem("quizData");
  };

  const handleDownloadAnswers = () => {
    const quizResults = JSON.parse(localStorage.getItem("quizData")) || {};
    let csvContent = "order,title,type,answer\n";

    let order = 1;
    for (const key in quizResults) {
      if (Object.hasOwnProperty.call(quizResults, key)) {
        const item = quizResults[key];
        let answerValue;
        if (Array.isArray(item)) {
          answerValue = `"${item.join(",")}";`;
        } else {
          answerValue = `"${item}";`;
        }
        csvContent += `${order},${key},${item.type},${answerValue}\n`;
        order++;
      }
    }

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
