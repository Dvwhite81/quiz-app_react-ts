import { Result } from '../types';

interface ResultContainerProps {
  result: Result;
}

const ResultContainer = ({ result }: ResultContainerProps) => {
  if (!result) return null;

  const { text } = result;

  return (
    <div id="result-container" className="modal">
      <h3>{text[0]}</h3>
      {text[1] && <p>{text[1]}</p>}
    </div>
  );
};

export default ResultContainer;
