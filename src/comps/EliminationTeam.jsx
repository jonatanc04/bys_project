import { Link } from "react-router-dom";

export default function EliminationTeam({ teamName, score, teamLogo, teamImage, addClasses, path, teams }) {
  const team = teams[teamName];
  const teamLink = team ? `/teams${path}/${team.id}` : null;
  const classes = `elimination-row col-10 d-flex flex-row justify-content-around ${addClasses ? addClasses.join(" ") : ""}`;

  return (
    teamLink ? (
      <Link to={teamLink} className={classes}>
        <img className='col-2 p-2' src={teamLogo + teamImage} alt={teamName} />
        <h3 className='col-8 no-back m-0 d-flex align-items-center'>{teamName}</h3>
        <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>{score}</h1>
      </Link>
    ) : (
      <Link to={teamLink} className={classes}>
        <img className='col-2 p-2' src={teamLogo + teamImage} alt={teamName} />
        <h3 className='col-8 no-back m-0 d-flex align-items-center'>{teamName}</h3>
        <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>{score}</h1>
      </Link>
    )
  );
}
