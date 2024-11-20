import React from "react";
import weeks from "../data/weeks.json";
import '../assets/styles/Schendule.css';
import { useTranslation } from 'react-i18next';
import SchenduleWeek from "../comps/SchenduleWeek";
import LegendCube from "../comps/LegendCube";

export default function Schendule() {

  const { t } = useTranslation();

  return (
    <div className="fade-in container d-flex flex-column align-items-center justify-content-center">
      {Object.entries(weeks).map(([weekNumber, weekData]) => (
        <SchenduleWeek key={weekNumber} weekNumber={weekNumber} weekData={weekData} />
      ))}
      <div className="legend col-12 d-flex flex-row align-items-center justify-content-end">
        <LegendCube color={"green"} text={t('finished')} />
        <LegendCube color={"red"} text={t('cancelled')} />
      </div>
    </div>
  );
}
