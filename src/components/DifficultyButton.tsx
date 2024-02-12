import { Difficulty } from '../types';

interface DifficultyButtonProps {
  difficulty: Difficulty;
}

const DifficultyButton = ({ difficulty }: DifficultyButtonProps) => {
  const { label } = difficulty;

  return (
    <button
      type="button"
      className="btn difficulty-btn"
      onClick={() => console.log(label)}
    >
      {label}
    </button>
  );
};

export default DifficultyButton;
