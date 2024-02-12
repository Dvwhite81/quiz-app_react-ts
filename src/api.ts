import axios from 'axios';
import { Category, Difficulty } from './types';

const getQuestions = async (category: Category, difficulty: Difficulty) => {
  const apiUrl = `https://the-trivia-api.com/api/questions?categories=${category?.values}&limit=5&difficulty=${difficulty?.value}`;
  const response = await axios.get(apiUrl);
  if (response) {
    return response.data;
  }
};

export { getQuestions };
