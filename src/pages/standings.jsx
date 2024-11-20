import React, {useState} from "react";
import teams from "../data/teams.json";
import '../assets/styles/Standings.css';
import { useTranslation } from 'react-i18next';
import Groups from "../comps/Groups";
import Elimination from "../comps/Elimination";

export default function Standings() {

  const { t } = useTranslation();
  const [showGroups, setShowGroups] = useState(true);

  const toggleGroups = state => {
    setShowGroups(state);
  }
  
  return (
    <div className="standing-page fade-in container d-flex flex-column align-items-center justify-content-center">
      <div className="col-12 d-flex flex-row align-items-center justify-content-around">
        <button className="col-4 p-2" onClick={() => toggleGroups(true)}>{t('group-button')}</button>
        <button className="col-4 p-2" onClick={() => toggleGroups(false)}>{t('elimin-button')}</button>
      </div>
      {showGroups ? (
        <Groups teams={teams} />
      ) : (
        <Elimination teams={teams} />
      )}
    </div>
  );
}
