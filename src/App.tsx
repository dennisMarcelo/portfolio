import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import './global.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { MyTechs } from './Pages/MyTechs';
import { ProfessionalExperience } from './Pages/ProfessionalExperience';
import { Portifolio } from './Pages/Portifolio';
import { Menu } from './Components/Menu/Menu';
// import ErrorPage from './Pages/ErroPage';

export function App() {
  return (
    <div className="min-h-screen">
      <Menu />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/portfolio" element={<Portifolio />} />
        <Route path="/Portfolio/my-techs" element={<MyTechs />} />
        <Route path="/Portfolio/professional-experience" element={<ProfessionalExperience />} />
      </Routes>
    </div>
  );
}
