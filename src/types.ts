export type Category = {
  label: string,
  values: string[],
};

export type Difficulty = {
  label: string,
  value: string,
}

export type Question = {
  category: string,
  correctAnswer: string,
  id: string,
  incorrectAnswers: string[],
  question: string,
  type: string,
}

export type Result = {
  isCorrect: boolean,
  text: string[],
}
