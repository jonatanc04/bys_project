import React, { useState } from "react";
import teams from "../data/teams.json";

export default function GameRow({ gameInfo }) {
  const [showRedDiv, setShowRedDiv] = useState(false);
  const teamLogo = process.env.PUBLIC_URL;

  const team1 = Object.entries(teams).find(
    ([teamName]) => teamName === gameInfo[0]
  );
  const team2 = Object.entries(teams).find(
    ([teamName]) => teamName === gameInfo[2]
  );

  const toggleRedDiv = () => {
    setShowRedDiv((prev) => !prev);
  };

  return (
    <div>
      <div className="game-row p-2 d-flex flex-wrap" onClick={toggleRedDiv}>
        <img className="logo col-1" src={teamLogo + team1[1].img} alt="img" />
        <h5 className="col-4 m-0 d-flex align-items-center justify-content-center">
          {gameInfo[0]}
        </h5>
        <h4 className="col-2 m-0 d-flex align-items-center justify-content-center">
          {gameInfo[1]}
        </h4>
        <h5 className="col-4 m-0 d-flex align-items-center justify-content-center">
          {gameInfo[2]}
        </h5>
        <img className="logo col-1" src={teamLogo + team2[1].img} alt="img" />
        <div className="col-12 text-center">{gameInfo[3]}</div>
      </div>

      {showRedDiv && gameInfo[4] !== "" && (
        <div className="result-div" onClick={toggleRedDiv}>
          <img src={teamLogo + gameInfo[4]} alt="img" />
        </div>
      )}
    </div>
  );
}
