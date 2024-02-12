import { useState } from 'react';
import axios from 'axios';
import { CATEGORIES, DIFFICULTIES } from './data';
import { Category, Difficulty, Question } from './types';
import CategorySelect from './components/CategorySelect';
import NavBar from './components/Navbar';
import './App.css';
import WelcomePage from './pages/WelcomePage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>(DIFFICULTIES[0]);
  const [limit, setLimit] = useState(5);
  const [questions, setQuestions] = useState<Question[] | []>([]);

  const getQuestion = async () => {
    const apiUrl = `https://the-trivia-api.com/api/questions?categories=${selectedCategory?.values}&limit=${limit}&difficulty=${difficulty.value}`;
    const response = await axios.get(apiUrl);
    if (response) {
      console.log('response.data:', response.data);
      setQuestions(response.data);
    }
  };

  return (
    <>
      <NavBar />
      <WelcomePage categories={CATEGORIES} difficulties={DIFFICULTIES} />
      
    </>
  );
}

export default App;
