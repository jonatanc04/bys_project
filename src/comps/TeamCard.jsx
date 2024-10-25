import React from "react";
import "../assets/styles/TeamCard.css";
import { Link } from "react-router-dom";

export default function TeamCard({ teamName, teamData }) {
  const teamLogo = process.env.PUBLIC_URL + teamData.img;

  return (
    <div className="team-card col-5 p-3 d-flex flex-column justify-content-center align-items-center" key={teamName}>
      <Link className="d-flex flex-column justify-content-center align-items-center" to={`/teams/${teamData.id}`}>
        <img src={teamLogo} alt={`${teamName} Logo`} className="team-logo" />
        <h3 className="m-3 text-center">{teamName}</h3>
      </Link>
    </div>
  );
}
