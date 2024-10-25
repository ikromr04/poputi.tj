import '../index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import { AppRoute } from '../const';
import MainPage from './pages';
import LoginPage from './pages/auth/login';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Index} element={<MainPage />} />
        <Route path={AppRoute.Trips.Index} element={<LoginPage />} />
        <Route path={AppRoute.Help.Index} element={<LoginPage />} />
        <Route path={AppRoute.Search.Trip} element={<LoginPage />} />
        <Route path={AppRoute.Publish.Trip} element={<LoginPage />} />

        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />
        <Route path={AppRoute.Auth.Register} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
