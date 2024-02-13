import { Result } from '../types';

interface ResultContainerProps {
  result: Result;
}

const ResultContainer = ({ result }: ResultContainerProps) => {
  if (!result) return null;

  const { text } = result;

  return (
    <div id="outer-result-container" className="modal">
      <div id="result-container">
        <h3>{text[0]}</h3>
        {text[1] && <p>{text[1]}</p>}
      </div>
    </div>
  );
};

export default ResultContainer;
