/* eslint-disable no-console */
import React from 'react';
import { Route, Routes } from 'react-router';
import { Main } from './components/Main/Main';
import { NotFound } from './components/NotFound';
import { OtherProjects } from './components/OtherProjects';

export const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/job_for_jun/" element={<Main />} />
    <Route path="/job_for_jun/op" element={<OtherProjects />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
