import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/Resume.css';
import Teams from './teams';
import Schendule from './schendule';
import Standings from './standings';

export default function Resume({ weeks, teams, elimination }) {
  const [activeTab, setActiveTab] = useState('teams');
  const { t } = useTranslation();

  return (
    <div className="resume fade-in container d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex mt-3">
        <button className={`button-resume ${activeTab === 'teams' ? 'activated' : 'unactivated'}`} onClick={() => setActiveTab('teams')}>{t('teams')}</button>
        <button className={`button-resume ${activeTab === 'schendule' ? 'activated' : 'unactivated'}`} onClick={() => setActiveTab('schendule')}>{t('schendule')}</button>
        <button className={`button-resume ${activeTab === 'standings' ? 'activated' : 'unactivated'}`} onClick={() => setActiveTab('standings')}>{t('standings')}</button>
      </div>

      {activeTab === 'teams' && <Teams teams={teams} path={"/temp-0"} />}
      {activeTab === 'schendule' && <Schendule weeks={weeks} teams={teams} activated={true} />}
      {activeTab === 'standings' && <Standings teams={teams} elimination={elimination} activated={true} path={"/temp-0"} />}
    </div>
  );
}
