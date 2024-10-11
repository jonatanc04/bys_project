import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar';
import TeamsPage from './pages/teamsPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/teams' element={<TeamsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
