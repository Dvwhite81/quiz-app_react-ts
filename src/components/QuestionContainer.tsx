import { useEffect, useState } from 'react';
import { Question } from '../types';
import AnswerButton from './AnswerButton';

interface QuestionContainerProps {
  number: number;
  currentQuestion: Question;
  checkAnswer: (guess: string) => void;
}

const QuestionContainer = ({
  number,
  currentQuestion,
  checkAnswer,
}: QuestionContainerProps) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const { correctAnswer, incorrectAnswers, question } = currentQuestion;

  useEffect(() => {
    const allAnswers = [...incorrectAnswers];
    allAnswers.splice(
      (allAnswers.length + 1) * Math.random(),
      0,
      correctAnswer,
    );

    setAnswers(allAnswers);
  }, [incorrectAnswers]);

  return (
    <div className="question-container">
      <h3>Question #{number}</h3>
      <p className="question-text">{question}</p>
      <div id="answer-select" className="select-container">
        {answers.map((a) => (
          <AnswerButton key={a} answer={a} checkAnswer={checkAnswer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
