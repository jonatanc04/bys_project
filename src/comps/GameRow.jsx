import teams from "../data/teams.json";

export default function GameRow({gameInfo}) {

  const teamLogo = process.env.PUBLIC_URL;

  const team1 = Object.entries(teams)
  .filter(([teamName, _]) => teamName === gameInfo[0]);

  const team2 = Object.entries(teams)
  .filter(([teamName, _]) => teamName === gameInfo[2]);

  return (
    <div className="game-row p-2 d-flex flex-row">
      <img className="logo col-1" src={teamLogo + team1[0][1].img} alt="img" />
      <h5 className="col-4 m-0 d-flex align-items-center justify-content-center">{gameInfo[0]}</h5>
      <h4 className="col-2 m-0 d-flex align-items-center justify-content-center">{gameInfo[1]}</h4>
      <h5 className="col-4 m-0 d-flex align-items-center justify-content-center">{gameInfo[2]}</h5>
      <img className="logo col-1" src={teamLogo + team2[0][1].img} alt="img" />
    </div>
  );
}