interface EndRoundAnswersProps {
  roundGuesses: number[];
}

const EndRoundAnswers = ({ roundGuesses }: EndRoundAnswersProps) => {
  const images = [];

  for (let i = 0; i < 5; i++) {
    const src = roundGuesses.includes(i) ? '/correct-answer.png' : '/incorrect-answer.png';
    images.push(AnswerImage(i, src));
  }
  return (
    <div id="end-round-answers">
      {images}
    </div>
  )
}

const AnswerImage = (i: number, src: string) => {
  return (
    <img key={i} className="round-answer-img" src={src} alt="answer icon" />
  )
}

export default EndRoundAnswers;
