/* eslint-disable no-console */
import React from 'react';
import { Route, Routes } from 'react-router';
import { Main } from './components/Main/Main';
import { OtherProjects } from './components/OtherProjects';

export const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/op" element={<OtherProjects />} />
  </Routes>
);
