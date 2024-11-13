import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function GameImages({ gameData, toggleRedDiv }) {
  const { t } = useTranslation();
  const [imageIndex, setImageIndex] = useState(0);
  const url = process.env.PUBLIC_URL;

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % gameData.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      (prevIndex - 1 + gameData.length) % gameData.length
    );
  };

  return (
    <div className="fade-in result-div h-100 w-100 d-flex flex-column align-items-center justify-content-center">
      {gameData.length !== 1 ? (
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center p-2">{t('game')} {imageIndex + 1}</h2>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <h1 className="d-flex align-items-center justify-content-center m-3" onClick={prevImage}>{"◀"}</h1>
            <img src={url + gameData[imageIndex]} alt="img" onClick={toggleRedDiv} />
            <h1 className="d-flex align-items-center justify-content-center m-3" onClick={nextImage}>{"▶"}</h1>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center p-2">{t('game')} 1</h2>
          <img src={url + gameData[0]} alt="img" onClick={toggleRedDiv} />
        </div>
      )}
    </div>
  );
}
