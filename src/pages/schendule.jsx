import React from "react";
import '../assets/styles/Schendule.css';
import { useTranslation } from 'react-i18next';
import SchenduleWeek from "../comps/SchenduleWeek";
import LegendCube from "../comps/LegendCube";

export default function Schendule({weeks, teams, activated}) {

  const { t } = useTranslation();

  if (activated) {
    return (
      <div className="fade-in container d-flex flex-column align-items-center justify-content-center">
        {Object.entries(weeks).map(([weekNumber, weekData]) => (
          <SchenduleWeek key={weekNumber} weekNumber={weekNumber} weekData={weekData} teams={teams} />
        ))}
        <div className="legend col-12 d-flex flex-row align-items-center justify-content-end">
          <LegendCube color={"green"} text={t('finished')} />
          <LegendCube color={"red"} text={t('cancelled')} />
        </div>
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
