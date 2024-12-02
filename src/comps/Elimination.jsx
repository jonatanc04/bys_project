import '../assets/styles/Elimination.css';
import { useTranslation } from 'react-i18next';
import EliminationBlock from './EliminationBlock';
import LegendCube from './LegendCube'

export default function Elimination({ teams, elimination }) {

  const { t } = useTranslation();

  const getTeamImages = (teamKeys) => {
    return teamKeys.map(teamKey => {
      const team = teams[teamKey];
      return team && team.img ? team.img : '../teams/default.png';
    });
  };

  const semifinalGame1Info = elimination.semifinals.game1;
  const semifinalGame1Teams = getTeamImages([elimination.semifinals.game1[0], elimination.semifinals.game1[3]]);

  const semifinalGame2Info = elimination.semifinals.game2;
  const semifinalGame2Teams = getTeamImages([elimination.semifinals.game2[0], elimination.semifinals.game2[3]]);

  const finalInfo = elimination.finals.final;
  const finalTeams = getTeamImages([elimination.finals.final[0], elimination.finals.final[3]]);

  const thirdPlaceInfo = elimination.finals.third;
  const thirdPlaceTeams = getTeamImages([elimination.finals.third[0], elimination.finals.third[3]]);

  return (
    <div className="elimination m-3 p-4 col-12 d-flex flex-row">

      <div className='col-6 d-flex flex-column'>
        <h3 className='text-center p-4'>Semifinal</h3>
        <EliminationBlock blockInfo={semifinalGame1Info} teamImages={semifinalGame1Teams} final={false} />
        <EliminationBlock blockInfo={semifinalGame2Info} teamImages={semifinalGame2Teams} final={false} />
        <div className='d-flex p-3 flex-row align-items-center justify-content-end'>
          <LegendCube color={"green"} text={t('qualify')} />
          <LegendCube color={"yellow"} text={t('winner')} />
        </div>
      </div>

      <div className='col-6 d-flex flex-column'>
        <h3 className='text-center p-4'>Final</h3>
        <EliminationBlock blockInfo={finalInfo} teamImages={finalTeams} final={true} />
        <h3 className='text-center p-4'>3º & 4º</h3>
        <EliminationBlock blockInfo={thirdPlaceInfo} teamImages={thirdPlaceTeams} final={false} />
      </div>
    </div>
  );
}
