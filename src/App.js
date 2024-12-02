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
import teamData from './data/teams.json';
import Standings from './pages/standings';
import Inscription from './pages/inscription';
import Historic from './pages/history';
import './App.css';

import teams from "./data/current/teams.json";
import weeks from "./data/current/weeks.json";
import elimination from './data/current/elimination.json';

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
          <Route path='/teams' element={<Teams teams={teams} />} />
          <Route path="/teams/:id" element={<TeamPage teamData={teamData} />} />
          <Route path='/schendule' element={<Schendule weeks={weeks} teams={teams} />} />
          <Route path='/standings' element={<Standings teams={teams} elimination={elimination} />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/inscriptions' element={<Inscription/> } />
          <Route path='/honours' element={<Honours />} />
          <Route path='/history' element={<Historic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
