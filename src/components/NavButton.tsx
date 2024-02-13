interface NavButtonProps {
  type: string
  label: string
  setGameType: (value: string) => void
  handlePlayForPoints: () => void
}

const NavButton = ({ type, label, setGameType, handlePlayForPoints }: NavButtonProps) => {
  const handleClick = () => {
    handlePlayForPoints();
    setGameType(type);
  }
  return (
    <button
      type="button"
      className="btn nav-btn"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default NavButton;
