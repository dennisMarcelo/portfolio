import React from 'react';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { MyTechs } from './Pages/MyTechs';
import { ProfessionalExperience } from './Pages/ProfessionalExperience';
import { Portifolio } from './Pages/Portifolio';

export function App() {
  return (
    <>
      <Home />
      <About />
      <Portifolio />
      <MyTechs />
      <ProfessionalExperience />
    </>
  );
}
