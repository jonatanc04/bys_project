import React from "react";
import '../assets/styles/Teams.css';
import TeamCard from "../comps/TeamCard";

export default function Teams({teams}) {
  return (
    <div className="teams fade-in container d-flex flex-wrap justify-content-center align-items-center">
      {Object.entries(teams)
        .filter(([teamName, teamData]) => teamData.active)
        .map(([teamName, teamData]) => (
          <TeamCard key={teamName} teamData={teamData} teamName={teamName} />
        ))}
    </div>
  );
}
