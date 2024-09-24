
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Planner from './components/Planner';
import About from './components/About';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/planner">Planner</Link></li>
          <li><Link to="/settings">Settings</Link></li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
