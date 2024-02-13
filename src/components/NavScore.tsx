interface NavScoreProps {
  type: string
  points: number
}

const NavScore = ({ type, points }: NavScoreProps) => {
  return (
    <div className="nav-score-div">
      <h3>
        {type} points
      </h3>
      <h2>{points}</h2>
    </div>
  )
}

export default NavScore;
