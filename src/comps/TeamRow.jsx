import { Link } from "react-router-dom";
import '../assets/styles/TeamRow.css';

export default function TeamRow({ teamName, teamData, index, path }) {

  const teamLogo = process.env.PUBLIC_URL + teamData.img;
  const rowClass = `team-row p-2 d-flex flex-row justify-content-end ${index === 0 || index === 1 ? 'qualify' : ''}`;

  return (
    <Link to={`/teams${path}/${teamData.id}`} className={rowClass}>
      <img className="col-2" src={teamLogo} alt={teamName} />
      <h3 className="col-6 d-flex align-items-center justify-content-center m-0 text-center">{teamName}</h3>
      <h3 className="col-2 d-flex align-items-center justify-content-center m-0 text-center">{teamData['wins']}</h3>
      <h3 className="col-2 d-flex align-items-center justify-content-center m-0 text-center">{teamData['lose']}</h3>
    </Link>
  );
}
