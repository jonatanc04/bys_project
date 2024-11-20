import '../assets/styles/Elimination.css'

export default function Elimination() {

  const teamLogo = process.env.PUBLIC_URL + '../teams/default.png';

  return (
    <div className="elimination m-3 p-4 col-12 d-flex flex-row">
      <div className='col-6 d-flex flex-column'>
        <h3 className='text-center p-4'>Semifinal</h3>

        <div className='elimination-block m-3 d-flex flex-column align-items-center'>
          <div className='elimination-row border-bot col-10 d-flex flex-row justify-content-around'>
            <img className='col-2 p-1' src={teamLogo} alt='bys' />
            <h3 className='col-8 m-0 d-flex align-items-center'>1º Group A</h3>
            <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>0</h1>
          </div>
          <div className='elimination-row col-10 d-flex flex-row justify-content-around'>
            <img className='col-2 p-1' src={teamLogo} alt='bys' />
            <h3 className='col-8 m-0 d-flex align-items-center'>2º Group B</h3>
            <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>0</h1>
          </div>
        </div>

        <div className='elimination-block m-3 d-flex flex-column align-items-center'>
          <div className='elimination-row border-bot col-10 d-flex flex-row justify-content-around'>
            <img className='col-2 p-1' src={teamLogo} alt='bys' />
            <h3 className='col-8 m-0 d-flex align-items-center'>1º Group B</h3>
            <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>0</h1>
          </div>
          <div className='elimination-row col-10 d-flex flex-row justify-content-around'>
            <img className='col-2 p-1' src={teamLogo} alt='bys' />
            <h3 className='col-8 m-0 d-flex align-items-center'>2º Group A</h3>
            <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>0</h1>
          </div>
        </div>

      </div>
      <div className='col-6 d-flex flex-column'>
        <h3 className='text-center p-4'>Final</h3>
        <div className='separator'></div>
        <div className='elimination-block m-3 d-flex flex-column align-items-center'>
          <div className='elimination-row border-bot col-10 d-flex flex-row justify-content-around'>
            <img className='col-2 p-1' src={teamLogo} alt='bys' />
            <h3 className='col-8 m-0 d-flex align-items-center'>Winner Game 1</h3>
            <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>0</h1>
          </div>
          <div className='elimination-row col-10 d-flex flex-row justify-content-around'>
            <img className='col-2 p-1' src={teamLogo} alt='bys' />
            <h3 className='col-8 m-0 d-flex align-items-center'>Winner Game 2</h3>
            <h1 className='col-1 m-0 d-flex align-items-center justify-content-center'>0</h1>
          </div>
        </div>
      </div>
    </div>
  )
}