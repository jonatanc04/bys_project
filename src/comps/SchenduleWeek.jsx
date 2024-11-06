import { useTranslation } from 'react-i18next';
import GameRow from "./GameRow";

export default function SchenduleWeek({ weekNumber, weekData }) {

  const { t } = useTranslation();

  return (
    <div className="schendule m-4 p-4 col-12 d-flex flex-wrap align-items-center justify-content-center">
      {console.log(weekData)}
      <h3 className="col-12 text-center">{t('week')} {weekNumber}</h3>
      <h4 className="col-6 text-center m-0">{t('group')} 1</h4>
      <h4 className="col-6 text-center m-0">{t('group')} 2</h4>
      {Object.entries(weekData).map(([groupNumber, gameData]) => (
        <div key={groupNumber} className="group col-6 d-flex flex-column">
          {Object.entries(gameData).map(([gameKey, gameInfo]) => (
            <GameRow key={gameKey} gameInfo={gameInfo}></GameRow>
          ))}
        </div>
      ))}
    </div>
  )
}