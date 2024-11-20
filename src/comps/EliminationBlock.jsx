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
      <div className={`elimination-row border-bot col-10 d-flex flex-row justify-content-around ${getRowClass(1)}`}>
        <img className='col-2 p-2' src={teamLogo + teamImages[0]} alt='bys' />
        <h3 className='col-8 m-0 d-flex align-items-center'>{blockInfo[0]}</h3>
        <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>{blockInfo[1]}</h1>
      </div>
      <div className={`elimination-row col-10 d-flex flex-row justify-content-around ${getRowClass(2)}`}>
        <img className='col-2 p-2' src={teamLogo + teamImages[1]} alt='bys' />
        <h3 className='col-8 m-0 d-flex align-items-center'>{blockInfo[3]}</h3>
        <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>{blockInfo[2]}</h1>
      </div>
    </div>
  );
}
