import EliminationTeam from './EliminationTeam';

export default function EliminationBlock({ blockInfo, teamImages, final }) {
  const teamLogo = process.env.PUBLIC_URL;

  const getRowClass = (rowIndex) => {
    const classBase = final ? 'yellow-back' : 'green-back';
    if (blockInfo[1] > blockInfo[2] && rowIndex === 1) return classBase;
    if (blockInfo[1] < blockInfo[2] && rowIndex === 2) return classBase;
    return '';
  };

  return (
    <div className='elimination-block m-3 d-flex flex-column align-items-center'>
      <EliminationTeam teamName={blockInfo[0]} score={blockInfo[1]} teamLogo={teamLogo} teamImage={teamImages[0]} addClasses={[getRowClass(1), "border-bot"]} />
      <EliminationTeam teamName={blockInfo[3]} score={blockInfo[2]} teamLogo={teamLogo} teamImage={teamImages[1]} addClasses={[getRowClass(2), ""]} />
    </div>
  );
}
