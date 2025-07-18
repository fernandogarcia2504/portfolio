import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/page';
import AboutMePage from './pages/AboutMePage/page';
import ProjectsPage from './pages/ProjectsPage/page';
import CybersecurityPage from './pages/CybersecurityPage.tsx/page';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/about' element={<AboutMePage></AboutMePage>} />
        <Route path='/projects' element={<ProjectsPage></ProjectsPage>} />
        <Route path='/cybersecurity' element={<CybersecurityPage></CybersecurityPage>} />
      </Routes>
    </Router>
  );
}

export default App;
