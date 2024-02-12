import { Difficulty } from '../types';

interface DifficultyButtonProps {
  difficulty: Difficulty
  selected: Difficulty | null
  setSelected: (difficulty: Difficulty) => void
}

const DifficultyButton = ({ difficulty, selected, setSelected }: DifficultyButtonProps) => {
  const { label } = difficulty;

  const style = difficulty === selected ? ' selected-category' : '';

  return (
    <button
      type="button"
      className={`btn difficulty-btn${style}`}
      onClick={() => setSelected(difficulty)}
    >
      {label}
    </button>
  );
};

export default DifficultyButton;
