import NavButton from "./NavButton";
import NavScore from "./NavScore";

interface NavBarProps {
  gameType: string
  setGameType: (value: string) => void
  gameIsStarted: boolean
  roundPoints: number
  gamePoints: number
  resetAll: () => void
}

const NavBar = ({
  gameType,
  setGameType,
  gameIsStarted,
  roundPoints,
  gamePoints,
  resetAll,
}: NavBarProps) => {
  const handlePlayForPoints = () => {
    if (gameIsStarted) {
      resetAll();
    }
  };

  return (
    <div id="navbar">
      <div className="navbar-div">
        {gameIsStarted && gameType === 'points' ? (
          <NavScore type="game" points={gamePoints} />
        ) : (
          <NavButton
            type="points"
            label="Play For Points"
            setGameType={setGameType}
            handlePlayForPoints={handlePlayForPoints}
          />
        )}
      </div>
      <img
        id="navbar-logo"
        src="/logo-transparent-3.png"
        alt="trivia hero logo"
        onClick={resetAll}
      />
      <div className="navbar-div">
        {gameIsStarted ? (
          <NavScore type="round" points={roundPoints} />
        ) : (
          <NavButton
            type="fun"
            label="Play For Fun"
            setGameType={setGameType}
            handlePlayForPoints={handlePlayForPoints}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
