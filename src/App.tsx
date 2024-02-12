import { useState } from 'react';
import GamePage from './pages/GamePage';
import NavBar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';
import { Category, Difficulty, Question } from './types';
import { getQuestions } from './api';
import './App.css';

function App() {
  const [page, setPage] = useState('welcome');
  const [category, setCategory] = useState<Category | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);

  const startRound = async (selectedCategory: Category, selectedDifficulty: Difficulty) => {
    setCategory(selectedCategory);
    setDifficulty(selectedDifficulty);
    const result = await getQuestions(selectedCategory, selectedDifficulty);
    setQuestions(result);
    setPage('game');
  };

  const endRound = () => setPage('welcome');

  return (
    <>
      <NavBar />
      <WelcomePage
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        handleClick={startRound}
        show={page === 'welcome'}
      />
      {questions && <GamePage questions={questions} handleClick={endRound} show={page === 'game'} />}
    </>
  );
}

export default App;
