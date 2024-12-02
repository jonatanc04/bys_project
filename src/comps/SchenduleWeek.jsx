import { useTranslation } from 'react-i18next';
import GameRow from "./GameRow";

export default function SchenduleWeek({ weekNumber, weekData, teams }) {
  const { t } = useTranslation();

  const isNumber = (value) => !isNaN(parseInt(value));

  return (
    <div className="schendule m-4 p-4 col-12 d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center">
      {isNumber(weekNumber) ? (
        <h3 className="col-12 text-center">{t('week')} {weekNumber}</h3>
      ) : (
        <h3 className="bot-gap col-12 text-center">{t(weekNumber)}</h3>
      )}

      {Object.entries(weekData).map(([groupNumber, gameData]) => (
        <div className='col-12 col-lg-6' key={groupNumber}>
          {isNumber(weekNumber) && (
            <h4 className="col-12 text-center">{t('group')} {groupNumber}</h4>
          )}
          <div className={`group${groupNumber} col-12 d-flex flex-column`}>
            {Object.entries(gameData).map(([gameKey, gameInfo]) => (
              <GameRow key={gameKey} gameInfo={gameInfo} teams={teams}></GameRow>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
