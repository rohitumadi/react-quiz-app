import { useQuiz } from "../contexts/QuizContext";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  function handleAnswer(answer) {
    dispatch({ type: "newAnswer", payload: answer });
  }
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <Option
          onAnswer={handleAnswer}
          index={index}
          answer={answer}
          question={question}
          key={index}
          option={option}
        />
      ))}
    </div>
  );
}
function Option({ option, onAnswer, index, answer, question }) {
  const hasAnswered = answer !== null;
  return (
    <button
      onClick={() => onAnswer(index)}
      disabled={answer !== null}
      className={`btn btn-option ${index === answer ? "answer" : ""} ${
        hasAnswered
          ? index === question.correctOption
            ? "correct"
            : "wrong"
          : ""
      }`}
    >
      {option}
    </button>
  );
}

export default Options;
