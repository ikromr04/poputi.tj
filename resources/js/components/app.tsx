import '../index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import { AppRoute } from '../const';
import MainPage from './pages';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Index} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
