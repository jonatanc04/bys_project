import TeamRow from "../comps/TeamRow";
import { useTranslation } from 'react-i18next';
import LegendCube from "./LegendCube";

export default function Groups({ teams, path }) {

  const { t } = useTranslation();

  const group1 = Object.entries(teams)
    .filter(([_, teamData]) => teamData.id % 2 !== 0 && teamData.active)
    .sort(([, a], [, b]) => {
      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }
      return a.lose - b.lose;
    });

  const group2 = Object.entries(teams)
    .filter(([_, teamData]) => teamData.id % 2 === 0 && teamData.active)
    .sort(([, a], [, b]) => {
      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }
      return a.lose - b.lose;
    });

  return (
    <>
      <div className="groups m-3 p-4 col-12 d-flex flex-column flex-lg-row align-items-center justify-content-around">
        <div className="group p-4 col-12 col-lg-6">
          <h3 className="text-center">{t('group')} 1</h3>
          <div className="d-flex p-2 flex-row justify-content-end">
            <div className="col-8"></div>
            <h4 className="col-2 m-0 text-center">W</h4>
            <h4 className="col-2 m-0 text-center">L</h4>
          </div>
          {group1.map(([teamName, teamData], index) => (
            <TeamRow key={teamData.id} teamData={teamData} teamName={teamName} index={index} path={path} />
          ))}
        </div>
        <div className="group p-4 col-12 col-lg-6">
          <h3 className="text-center">{t('group')} 2</h3>
          <div className="d-flex p-2 flex-row justify-content-end">
            <div className="col-8"></div>
            <h4 className="col-2 m-0 text-center">W</h4>
            <h4 className="col-2 m-0 text-center">L</h4>
          </div>
          {group2.map(([teamName, teamData], index) => (
            <TeamRow key={teamData.id} teamData={teamData} teamName={teamName} index={index} path={path} />
          ))}
        </div>
      </div>
      <div className="legend col-12 d-flex flex-row align-items-center justify-content-end">
        <LegendCube color={"green"} text={t('qualify')} />
      </div>
    </>
  )
}