import EndRoundAnswers from "./EndRoundAnswers";

interface EndRoundModalProps {
  roundPoints: number
  setRoundPoints: (value: number) => void
  roundGuesses: number[]
  setPage: (value: string) => void
}

const EndRoundModal = ({ roundPoints, setRoundPoints, roundGuesses, setPage }: EndRoundModalProps) => {
  const handleClick = () => {
    setRoundPoints(0);
    setPage('home');
  }
  return (
    <div className="modal points-modal">
      <h1>You scored {roundPoints} that round!</h1>
      <EndRoundAnswers roundGuesses={roundGuesses} />
      <h2>You got {roundGuesses.length} questions right</h2>
      <button
        type="button"
        className="btn btn-submit"
        onClick={handleClick}
      >
        Keep Playing
      </button>
    </div>
  )
}

export default EndRoundModal;
