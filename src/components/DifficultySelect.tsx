import DifficultyButton from './DifficultyButton';
import { Difficulty } from '../types';
import { DIFFICULTIES } from '../data';

interface DifficultySelectProps {
  selected: Difficulty | null;
  setSelected: (difficulty: Difficulty) => void;
  gameIsStarted: boolean;
  }

const DifficultySelect = ({ selected, setSelected, gameIsStarted }: DifficultySelectProps) => {
  return (
    <div className="page-container">
      <h3 className="page-header">select a difficulty</h3>
      <div id="difficulty-select" className="select-container">
        {DIFFICULTIES.map((d) => (
          <DifficultyButton
            key={d.label}
            difficulty={d}
            selected={selected}
            setSelected={setSelected}
            gameIsStarted={gameIsStarted}
          />
        ))}
      </div>
    </div>
  );
};

export default DifficultySelect;
