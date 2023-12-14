function FinishScreen({ score, maxScore, dispatch }) {
  const percentage = (score / maxScore) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {maxScore}{" "}
        {Math.ceil(percentage)}%
      </p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
