import React from "react";
import "../assets/styles/TeamCard.css";

export default function TeamCard({ teamName, teamData }) {
  const teamLogo = process.env.PUBLIC_URL + teamData.img;

  return (
    <div className="team-card col-5 p-3 d-flex flex-column justify-content-center align-items-center" key={teamName}>
      <a className="d-flex flex-column justify-content-center align-items-center" href={teamData.opgg}>
        <img src={teamLogo} alt={`${teamName} Logo`} className="team-logo" />
        <h3 className="m-3 text-center">{teamName}</h3>
      </a>
    </div>
  );
}