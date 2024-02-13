import { useState } from 'react';
import { Category, Difficulty, Question } from './types';
import { getQuestions } from './api';
import EndGameModal from './components/EndGameModal';
import EndRoundModal from './components/EndRoundModal';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [roundIsOver, setRoundIsOver] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [usedCategories, setUsedCategories] = useState<Category[]>([]);
  const [roundGuesses, setRoundGuesses] = useState<number[]>([]);
  const [gameRightGuesses, setGameRightGuesses] = useState(0);
  const [category, setCategory] = useState<Category | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [gameType, setGameType] = useState<string>('fun');
  const [gamePoints, setGamePoints] = useState(0);
  const [roundPoints, setRoundPoints] = useState(0);

  const startRound = async (
    selectedCategory: Category,
    selectedDifficulty: Difficulty,
  ) => {
    setCategory(selectedCategory);
    setDifficulty(selectedDifficulty);
    const result = await getQuestions(selectedCategory, selectedDifficulty);
    setQuestions(result);
    setRoundIsOver(false);
    setRoundGuesses([]);
    if (gameType === 'points') {
      setUsedCategories(usedCategories.concat(selectedCategory));
    }
    setPage('game');
  };

  const endRound = () => {
    setCategory(null);
    setRoundIsOver(true);
    if (gameType !== 'points') {
      setDifficulty(null);
      setGameIsOver(true);
      setGameIsStarted(false);
      setUsedCategories([]);
    }
    if (gameType === 'points' && usedCategories.length === 10) {
      setGameIsOver(true);
    }
  };

  const startGame = (
    selectedCategory: Category,
    selectedDifficulty: Difficulty,
  ) => {
    setGameIsStarted(true);
    setGameIsOver(false);
    startRound(selectedCategory, selectedDifficulty);
  };

  const addPoints = (index: number) => {
    const pointsToAdd =
      difficulty?.value === 'easy'
        ? 10
        : difficulty?.value === 'medium'
          ? 25
          : 50;

    setRoundPoints(roundPoints + pointsToAdd);
    setRoundGuesses(roundGuesses.concat(index));
    setGamePoints(gamePoints + pointsToAdd);
    setGameRightGuesses((prev) => prev + 1);
  };

  const resetAll = () => {
    console.log('resetAll');
    setGameIsStarted(false);
    setRoundIsOver(false);
    setGameIsOver(false);
    setUsedCategories([]);
    setRoundGuesses([]);
    setGameRightGuesses(0);
    setCategory(null);
    setDifficulty(null);
    setQuestions(null);
    setGamePoints(0);
    setRoundPoints(0);
    setPage('home');
  }

  return (
    <>
      <NavBar
        gameType={gameType}
        setGameType={setGameType}
        gameIsStarted={gameIsStarted}
        roundPoints={roundPoints}
        gamePoints={gamePoints}
        resetAll={resetAll}
      />
      <HomePage
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        startGame={startGame}
        startRound={startRound}
        gameType={gameType}
        gameIsStarted={gameIsStarted}
        usedCategories={usedCategories}
        show={page === 'home'}
      />
      {questions && (
        <GamePage
          questions={questions}
          endRound={endRound}
          addPoints={addPoints}
          show={page === 'game'}
        />
      )}
      {roundIsOver && page !== 'home' && (
        <EndRoundModal
          roundPoints={roundPoints}
          setRoundPoints={setRoundPoints}
          roundGuesses={roundGuesses}
          setPage={setPage}
        />
      )}
      {gameIsOver && gameType === 'points' && (
        <EndGameModal gamePoints={gamePoints} gameRightGuesses={gameRightGuesses} resetAll={resetAll} />
      )}
    </>
  );
}

export default App;
