interface EndRoundModalProps {
  roundPoints: number;
  setRoundPoints: (value: number) => void;
  gamePoints: number;
  setGamePoints: (value: number) => void;
  setPage: (value: string) => void;
}

const EndRoundModal = ({ }: EndRoundModalProps) => {
  return <div className="modal points-modal"></div>;
};

export default EndRoundModal;
