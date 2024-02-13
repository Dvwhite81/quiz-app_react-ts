import { useEffect, useState } from 'react';
import { Question, Result } from '../types';
import QuestionContainer from '../components/QuestionContainer';
import ResultContainer from '../components/ResultContainer';

interface GamePageProps {
  questions: Question[];
  endRound: () => void;
  addPoints: (value: number) => void;
  show: boolean;
}

const GamePage = ({ questions, endRound, addPoints, show }: GamePageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState<Result | null>(null);

  console.log('currentQuestion before:', currentQuestion);

  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, [questions]);

  if (!show) return null;
  if (!currentQuestion) return null;

  console.log('currentQuestion after:', currentQuestion);

  const { correctAnswer } = currentQuestion;

  const getNextQuestion = () => {
    const index = questions.indexOf(currentQuestion);
    const nextQuestion = questions[index + 1];

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setNumber((prev) => prev + 1);
    } else {
      setNumber(1);
      endRound();
    }
  };

  const checkAnswer = (answer: string) => {
    if (answer === correctAnswer) {
      setResult({
        isCorrect: true,
        text: ['Correct!'],
      });
      const index = questions.indexOf(currentQuestion);
      addPoints(index);
    } else {
      setResult({
        isCorrect: false,
        text: ['Wrong!', `The correct answer was ${correctAnswer}`],
      });
    }

    setTimeout(() => {
      setResult(null);
      getNextQuestion();
    }, 2000);
  };

  return (
    <div id="game-page" className="page">
      <QuestionContainer
        number={number}
        currentQuestion={currentQuestion}
        checkAnswer={checkAnswer}
      />
      {result && <ResultContainer result={result} />}
    </div>
  );
};

export default GamePage;
