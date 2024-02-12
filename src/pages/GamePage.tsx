import { useState } from 'react';
import { Question } from '../types';
import QuestionContainer from '../components/QuestionContainer';

interface GamePageProps {
  questions: Question[];
  handleClick: () => void;
  show: boolean;
}

const GamePage = ({ questions, handleClick, show }: GamePageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);

  if (!show) return null;

  const getNextQuestion = () => {
    const index = questions.indexOf(currentQuestion);
    const nextQuestion = questions[index + 1];

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      handleClick();
    }
  }

  return (
    <div id="game-page" className="page">
      <QuestionContainer question={currentQuestion} handleClick={getNextQuestion} />
    </div>
  )
}

export default GamePage;
