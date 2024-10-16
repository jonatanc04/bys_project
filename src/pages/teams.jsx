import React from "react";
import teams from "../data/teams.json";
import '../assets/styles/Teams.css';
import TeamCard from "../comps/TeamCard";

export default function Teams() {
  return (
    <div className="teams fade-in container d-flex flex-wrap justify-content-center align-items-center">
      {Object.entries(teams).map(([teamName, teamData]) => (
        <TeamCard teamData={teamData} teamName={teamName} />
      ))}
    </div>
  );
}
