import CategorySelect from '../components/CategorySelect';
import DifficultySelect from '../components/DifficultySelect';
import { Category, Difficulty } from '../types';

interface HomePageProps {
  category: Category | null;
  setCategory: (category: Category) => void;
  difficulty: Difficulty | null;
  setDifficulty: (difficulty: Difficulty) => void;
  startGame: (category: Category, difficulty: Difficulty) => void;
  startRound: (category: Category, difficulty: Difficulty) => void;
  gameType: string;
  gameIsStarted: boolean;
  usedCategories: Category[];
  show: boolean;
}

const HomePage = ({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  startGame,
  startRound,
  gameType,
  gameIsStarted,
  usedCategories,
  show,
}: HomePageProps) => {
  if (!show) return null;

  const btnText = gameType === 'fun' ? 'Play For Fun!' : 'Play For Points!';

  const handleClick = () => {
    if (!gameIsStarted && category && difficulty) {
      startGame(category, difficulty);
    }
    if (gameIsStarted && category && difficulty) {
      startRound(category, difficulty);
    }
  };

  return (
    <div id="home-page" className="page">
      <CategorySelect selected={category} setSelected={setCategory} usedCategories={usedCategories} />
      <DifficultySelect selected={difficulty} setSelected={setDifficulty} gameIsStarted={gameIsStarted} />
      <button id="home-submit" className="btn btn-submit" onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
};

export default HomePage;
