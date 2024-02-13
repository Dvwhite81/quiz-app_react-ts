interface EndGameModalProps {
  gamePoints: number;
  gameRightGuesses: number;
  resetAll: () => void;
}

const EndGameModal = ({ gamePoints, gameRightGuesses, resetAll }: EndGameModalProps) => {
  return (
    <div className="modal points-modal">
      <h1>You scored a total {gamePoints} that game!</h1>
      <h2>
        You got {gameRightGuesses} questions right
        out of 50 questions.
      </h2>
      <h2>Play Again?</h2>
      <button type="button" className="btn btn-submit" onClick={resetAll}>
        Sure
      </button>
    </div>
  );
};

export default EndGameModal;
