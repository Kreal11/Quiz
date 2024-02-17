const Answer = ({
  text,
  handleAnswerSelection,
  type,
  setSelectedAnswers,
  selectedAnswers,
}) => {
  const handleChange = () => {
    if (type === "multiple-select" || type === "bubble") {
      // Создаем копию текущих выбранных ответов
      const updatedAnswers = [...selectedAnswers];
      const index = updatedAnswers.indexOf(text);
      if (index === -1) {
        updatedAnswers.push(text); // Добавляем ответ в массив, если его там нет
      } else {
        updatedAnswers.splice(index, 1); // Удаляем ответ из массива, если он уже выбран
      }
      // Обновляем выбранные ответы
      setSelectedAnswers(updatedAnswers);
    } else {
      handleAnswerSelection(text); // Обрабатываем ответ как обычно для других типов вопросов
    }
  };

  return (
    <div>
      {type === "single-select" || type === "single-select-image" ? (
        <p onClick={handleChange}>{text}</p>
      ) : (
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={selectedAnswers.includes(text)}
          />
          {text}
        </label>
      )}
    </div>
  );
};

export default Answer;
