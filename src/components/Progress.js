function Progress({ index, numQuestions, score, maxScore }) {
  return (
    <header className="progress">
      <progress value={index + 1} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {score}/{maxScore}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
