import { Difficulty } from '../types';
import DifficultyButton from './DifficultyButton';

interface DifficultySelectProps {
  difficulties: Difficulty[];
}

const DifficultySelect = ({ difficulties }: DifficultySelectProps) => {
  return (
    <div className="page-container">
      <h3 className="page-header">
        select a difficulty
      </h3>
      <div id="difficulty-select" className="select-container">
        {difficulties.map((d) => (
          <DifficultyButton key={d.label} difficulty={d} />
        ))}
      </div>
    </div>
  );
};

export default DifficultySelect;
