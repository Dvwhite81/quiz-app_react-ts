import DifficultyButton from './DifficultyButton';
import { Difficulty } from '../types';
import { DIFFICULTIES } from '../data';

interface DifficultySelectProps {
  selected: Difficulty | null
  setSelected: (difficulty: Difficulty) => void
}

const DifficultySelect = ({
  selected,
  setSelected,
}: DifficultySelectProps) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default DifficultySelect;
