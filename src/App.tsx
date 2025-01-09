import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './global.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { MyTechs } from './Pages/MyTechs';
import { ProfessionalExperience } from './Pages/ProfessionalExperience';
import { Portifolio } from './Pages/Portifolio';
import ErrorPage from './Pages/ErroPage';
import { Menu } from './Components/Menu/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/portfolio',
    element: <Portifolio />,
  },
  {
    path: '/my-techs',
    element: <MyTechs />,
  },
  {
    path: '/professional-experience',
    element: <ProfessionalExperience />,
  },
]);

export function App() {
  return (
    <div className="min-h-screen">
      <Menu />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
}
