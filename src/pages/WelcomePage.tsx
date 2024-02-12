import CategorySelect from '../components/CategorySelect';
import DifficultySelect from '../components/DifficultySelect';
import { Category, Difficulty } from '../types';

interface WelcomePageProps {
  category: Category | null
  setCategory: (category: Category) => void
  difficulty: Difficulty | null
  setDifficulty: (difficulty: Difficulty) => void
  handleClick: (category: Category, difficulty: Difficulty) => void
  show: boolean
}

const WelcomePage = ({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  handleClick,
  show,
}: WelcomePageProps) => {

  if (!show) return null;

  const handleSubmit = () => {
    if (category && difficulty) {
      handleClick(category, difficulty);
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
        onClick={handleSubmit}
      >
        Play!
      </button>
    </div>
  );
};

export default WelcomePage;
