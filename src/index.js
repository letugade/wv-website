import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Navbar from './components/Navbar.js';

import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Repo from './screens/Projects/Repo';
import UTMC from './screens/Projects/UTMC';
import Podcast from './screens/Projects/Podcast';
import Wakeup from './screens/Projects/Wakeup';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {ProSidebarProvider} from "react-pro-sidebar";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/repo" element={<Repo />} />
      <Route path="projects/utmc" element={<UTMC />} />
      <Route path="projects/podcast" element={<Podcast />} />
      <Route path="projects/wakeup-club" element={<Wakeup />} />
      </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProSidebarProvider>
          <RouterProvider router={router} />
      </ProSidebarProvider>
  </React.StrictMode>
);
