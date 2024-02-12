import { useEffect, useState } from 'react';
import { Question } from '../types';
import AnswerButton from './AnswerButton';

interface QuestionContainerProps {
  number: number
  currentQuestion: Question
  setResult: (result: string) => void
  getNextQuestion: () => void
}

const QuestionContainer = ({ number, currentQuestion, setResult, getNextQuestion }: QuestionContainerProps) => {
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

  const checkAnswer = (answer: string) => {
    if (answer === correctAnswer) {
      setResult('Correct!');
    } else {
      setResult(`Wrong! The correct answer was ${correctAnswer}`);
    }

    setTimeout(() => {
      setResult('');
      getNextQuestion();
    }, 2000);
  };

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
