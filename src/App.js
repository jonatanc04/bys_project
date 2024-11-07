import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './comps/Navbar';
import Principal from './pages/principal';
import Teams from './pages/teams';
import Schendule from './pages/schendule';
import More from './pages/more';
import TeamPage from './pages/teamPage';
import teamData from './data/teams.json';
import './App.css';
import Standings from './pages/standings';

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
          <Route path='/teams' element={<Teams />} />
          <Route path="/teams/:id" element={<TeamPage teamData={teamData} />} />
          <Route path='/schendule' element={<Schendule />} />
          <Route path='/standings' element={<Standings />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
