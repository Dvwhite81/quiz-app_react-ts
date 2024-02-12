import { useState } from 'react';
import { Question } from '../types';
import QuestionContainer from '../components/QuestionContainer';

interface GamePageProps {
  questions: Question[];
  endRound: () => void;
  show: boolean;
}

const GamePage = ({ questions, endRound, show }: GamePageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState('');

  if (!show) return null;

  const getNextQuestion = () => {
    const index = questions.indexOf(currentQuestion);
    const nextQuestion = questions[index + 1];

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setNumber((prev) => prev + 1);
    } else {
      endRound();
    }
  }

  return (
    <div id="game-page" className="page">
      <QuestionContainer
        number={number}
        currentQuestion={currentQuestion}
        setResult={setResult}
        getNextQuestion={getNextQuestion}
      />
      <div id="result-container">{result}</div>
    </div>
  );
}

export default GamePage;
