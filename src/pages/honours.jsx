import '../assets/styles/Inscriptions.css';
import { useTranslation } from 'react-i18next';

export default function Honours({ honours }) {

  const { t } = useTranslation();

  const getMedalType = (text) => {
    if (text.includes("Winner")) return "🥇";
    if (text.includes("Runner-up")) return "🥈";
    if (text.includes("Place")) return "🥉";
    return "";
  };

  return (
    <div className="honours fade-in container d-flex flex-column align-items-center justify-content-center">
      <div className='container-honours p-3 m-3 col-12 d-flex flex-column align-items-center justify-content-center'>
        {Object.entries(honours).map(([teamName, teamData]) => (
          <div key={teamData.id} className="card-team-honour d-flex flex-row col-8 p-3 m-2">
            <div className='col-5 d-flex flex-column align-items-center justify-content-center'>
              <img src={teamData.img} alt={teamName} className="team-logo mb-2" width={100} />
              <h3>{teamName}</h3>
            </div>
            <div className='col-6'>
              <h4 className='text-center col-12'>{t('honours')}</h4>
              {teamData.honours.map((honour, index) => (
                <h5 key={index} className='text-center'>
                  {getMedalType(honour)} {honour}
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
