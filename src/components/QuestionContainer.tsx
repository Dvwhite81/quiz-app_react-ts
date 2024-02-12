import { Question } from '../types';

interface QuestionContainerProps {
  question: Question;
  handleClick: () => void;
}

const QuestionContainer = ({ question, handleClick }: QuestionContainerProps) => {
  const answers = [question.correctAnswer, ...question.incorrectAnswers];
  return (
    <div className="question-container">
      <div className="question-text">
        {question.question}
      </div>
      <div className="answers-container">
        {answers.map((a) => <button onClick={handleClick}>{a}</button>)}
      </div>
    </div>
  );
};

export default QuestionContainer;
