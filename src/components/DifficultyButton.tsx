import { Difficulty } from '../types';

interface DifficultyButtonProps {
  difficulty: Difficulty;
  selected: Difficulty | null;
  setSelected: (difficulty: Difficulty) => void;
  gameIsStarted: boolean;
  }

const DifficultyButton = ({
  difficulty,
  selected,
  setSelected,
  gameIsStarted,
  }: DifficultyButtonProps) => {
  const { label } = difficulty;

  const style = difficulty === selected ? ' selected-btn' : '';
  const isDisabled = gameIsStarted && selected !== null && difficulty !== selected;

  return (
    <button
      type="button"
      className={`btn difficulty-btn${style}`}
      onClick={() => setSelected(difficulty)}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default DifficultyButton;
