import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './comps/Navbar';
import Principal from './pages/principal';
import Teams from './pages/teams';
import Schendule from './pages/schendule';
import Rules from './pages/rules';
import Honours from './pages/honours';
import TeamPage from './pages/teamPage';
import Standings from './pages/standings';
import Inscription from './pages/inscription';
import Historic from './pages/history';
import Resume from './pages/resume';
import './App.css';

import teams from "./data/current/teams.json";
import weeks from "./data/current/weeks.json";
import elimination from './data/current/elimination.json';
import honours from './data/honours.json'

import teams_t0 from "./data/temp0/teams.json";
import weeks_t0 from "./data/temp0/weeks.json";
import elimination_t0 from './data/temp0/elimination.json';


function App() {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Router>
        <Navbar changeLanguage={changeLanguage} />
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/teams' element={<Teams teams={teams} path={""} />} />
          <Route path="/teams/:id" element={<TeamPage teamData={teams} />} />
          <Route path="/teams/temp-0/:id" element={<TeamPage teamData={teams_t0} />} />
          <Route path='/schendule' element={<Schendule weeks={weeks} teams={teams} activated={false} />} />
          <Route path='/standings' element={<Standings teams={teams} elimination={elimination} activated={false} path={""} />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/inscriptions' element={<Inscription/> } />
          <Route path='/honours' element={<Honours honours={honours} />} />
          <Route path='/history' element={<Historic />} />
          <Route path='/history/temp-0' element={<Resume weeks={weeks_t0} teams={teams_t0} elimination={elimination_t0} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
