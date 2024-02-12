import CategorySelect from '../components/CategorySelect';
import DifficultySelect from '../components/DifficultySelect';
import { Category, Difficulty } from '../types';

interface WelcomePageProps {
  categories: Category[];
  difficulties: Difficulty[];
}

const WelcomePage = ({ categories, difficulties }: WelcomePageProps) => {
  return (
    <div id="welcome-page" className="page">
      <CategorySelect categories={categories} />
      <DifficultySelect difficulties={difficulties} />
      <button id="welcome-submit" className="btn btn-submit">
        Play!
      </button>
    </div>
  );
};

export default WelcomePage;
