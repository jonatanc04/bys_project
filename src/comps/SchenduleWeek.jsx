import { useTranslation } from 'react-i18next';
import GameRow from "./GameRow";

export default function SchenduleWeek({ weekNumber, weekData }) {

  const { t } = useTranslation();

  return (
    <div className="schendule m-4 p-4 col-12 d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center">
      <h3 className="col-12 text-center">{t('week')} {weekNumber}</h3>
      {Object.entries(weekData).map(([groupNumber, gameData]) => (
        <div className='col-12 col-lg-6'>
          <h4 className="col-12 text-center m-0">{t('group')} {groupNumber}</h4>
          <div key={groupNumber} className={`group${groupNumber} col-12 d-flex flex-column`}>
            {Object.entries(gameData).map(([gameKey, gameInfo]) => (
              <GameRow key={gameKey} gameInfo={gameInfo}></GameRow>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}