import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Thanks = () => {
  const { t } = useTranslation();

  const handleRetakeQuiz = () => {
    localStorage.removeItem("quizData");
  };

  const handleDownloadAnswers = () => {
    const quizResults = JSON.parse(localStorage.getItem("quizData")) || {};
    let csvContent = `${t("order")},${t("title")},${t("type")},${t(
      "answer"
    )}\n`;

    let order = 1;
    for (const key in quizResults) {
      if (Object.hasOwnProperty.call(quizResults, key)) {
        const item = quizResults[key];
        let answerValue;
        let type;

        if (key === "email") {
          answerValue = `"${item}"`;
          type = "email";
        } else {
          answerValue = t(item.answer);
          type = t(item.type);
          if (Array.isArray(answerValue)) {
            answerValue = `"${answerValue.join(",")}"`;
          } else {
            answerValue = `"${answerValue}"`;
          }
        }

        csvContent += `${order},${t(key)},${type},${answerValue}\n`;
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
      <h3>{t("Thanks")}</h3>
      <button onClick={handleDownloadAnswers}>
        {t("Download my answers")}
      </button>
      <NavLink to="/questions/1" onClick={handleRetakeQuiz}>
        {t("Retake my quiz")}
      </NavLink>
    </div>
  );
};

export default Thanks;
