import CategorySelect from '../components/CategorySelect';
import DifficultySelect from '../components/DifficultySelect';
import { Category, Difficulty } from '../types';

interface WelcomePageProps {
  category: Category | null
  setCategory: (category: Category) => void
  difficulty: Difficulty | null
  setDifficulty: (difficulty: Difficulty) => void
  startRound: (category: Category, difficulty: Difficulty) => void
  show: boolean
}

const WelcomePage = ({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  startRound,
  show,
}: WelcomePageProps) => {

  if (!show) return null;

  const handleClick = () => {
    if (category && difficulty) {
      startRound(category, difficulty);
    }
  }

  return (
    <div id="welcome-page" className="page">
      <CategorySelect
        selected={category}
        setSelected={setCategory}
      />
      <DifficultySelect
        selected={difficulty}
        setSelected={setDifficulty}
      />
      <button
        id="welcome-submit"
        className="btn btn-submit"
        onClick={handleClick}
      >
        Play!
      </button>
    </div>
  );
};

export default WelcomePage;
