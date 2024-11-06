import React from "react";
import weeks from "../data/weeks.json";
import '../assets/styles/Schendule.css';
import SchenduleWeek from "../comps/SchenduleWeek";

export default function Schendule() {
  return (
    <div className="fade-in container d-flex flex-column align-items-center justify-content-center">
      {Object.entries(weeks).map(([weekNumber, weekData]) => (
        <SchenduleWeek key={weekNumber} weekNumber={weekNumber} weekData={weekData} />
      ))}
    </div>
  );
}
