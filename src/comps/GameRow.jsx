import React, { useState } from "react";
import teams from "../data/teams.json";
import { useTranslation } from 'react-i18next';

export default function GameRow({ gameInfo }) {
  const { t } = useTranslation();

  const [showRedDiv, setShowRedDiv] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
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

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % gameInfo[4].length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      (prevIndex - 1 + gameInfo[4].length) % gameInfo[4].length
    );
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

      {showRedDiv && gameInfo[4] && gameInfo[4].length > 0 && (
        <div className="result-div">
          {gameInfo[4].length !== 1 ? (
            <div className="d-flex flex-column align-items-center">
              <h2>{t('game')} {imageIndex + 1}</h2>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <h1 onClick={prevImage}>{"◀"}</h1>
                <img
                  src={teamLogo + gameInfo[4][imageIndex]}
                  alt="img"
                  onClick={toggleRedDiv}
                />
                <h1 onClick={nextImage}>{"▶"}</h1>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <h2>{t('game')} 1</h2>
              <img src={teamLogo + gameInfo[4][0]} alt="img" onClick={toggleRedDiv} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
