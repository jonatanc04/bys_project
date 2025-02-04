import React, {useState} from "react";
import '../assets/styles/Standings.css';
import { useTranslation } from 'react-i18next';
import Groups from "../comps/Groups";
import Elimination from "../comps/Elimination";

export default function Standings({teams, elimination, activated, path}) {

  const { t } = useTranslation();
  const [showGroups, setShowGroups] = useState(true);

  const toggleGroups = state => {
    setShowGroups(state);
  }
  
  if (activated) {
    return (
      <div className="standing-page fade-in container d-flex flex-column align-items-center justify-content-center">
        <div className="col-12 d-flex flex-row align-items-center justify-content-around">
          <button className="col-4 p-2" onClick={() => toggleGroups(true)}>{t('group-button')}</button>
          <button className="col-4 p-2" onClick={() => toggleGroups(false)}>{t('elimin-button')}</button>
        </div>
        {showGroups ? (
          <Groups teams={teams} path={path} />
        ) : (
          <Elimination teams={teams} elimination={elimination} path={path} />
        )}
      </div>
    )
  } else {
    return (
      <div className="inscription fade-in container d-flex flex-column align-items-center justify-content-center">
        <h3 className='p-3 m-3 col-12 text-center'>In working...</h3>
      </div>
    )
  }
}
