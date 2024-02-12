import { useState } from 'react';

interface AnswerButtonProps {
  answer: string;
  checkAnswer: (guess: string) => void
}

const AnswerButton = ({ answer, checkAnswer }: AnswerButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const style = isSelected ? ' selected-btn' : '';

  const handleClick = () => {
    setIsSelected(true);
    checkAnswer(answer);
  };

  return (
    <button
      type="button"
      className={`btn answer-btn${style}`}
      onClick={handleClick}
    >
      {answer}
    </button>
  );
};

export default AnswerButton;
