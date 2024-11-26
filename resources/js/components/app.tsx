import '../index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '../const';
import LoginPage from './pages/auth/login-page';
import HomePage from './pages/home-page';
import ForgotPasswordPage from './pages/auth/forgot-password-page';
import RegisterPage from './pages/auth/register-page';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<HomePage />} />
        <Route path={AppRoute.Trips.Index} element={<LoginPage />} />
        <Route path={AppRoute.Help.Index} element={<LoginPage />} />
        <Route path={AppRoute.Search.Trip} element={<LoginPage />} />
        <Route path={AppRoute.Publish.Trip} element={<LoginPage />} />

        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />
        <Route path={AppRoute.Auth.ForgotPassword} element={<ForgotPasswordPage />} />
        <Route path={AppRoute.Auth.Register} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
