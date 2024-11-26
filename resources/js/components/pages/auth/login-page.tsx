import React from 'react';
import { useAppSelector } from '../../../hooks';
import { getAuthStatus } from '../../../store/auth-slice/auth-selector';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from '../../forms/login-form';
import { Icons } from '../../icons';

export default function LoginPage(): JSX.Element {
  const
    navigate = useNavigate(),
    authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) return <Navigate to={AppRoute.Home} />;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-illustrations bg-white bg-bottom bg-contain bg-no-repeat md:bg-transparent">

      <div className="w-[90vw] max-w-96 mx-auto mb-16 md:bg-white md:shadow-md sm:rounded-lg md:p-10 md:mb-20 xl:mb-28 mt-8 md:mt-12">
        <h1 className="title">Вход</h1>

        <p className="text-gray-600 mb-8">
          Нет аккаунта? <Link className="text-blue-600 transition-all duration-300 hover:text-blue-400" to={AppRoute.Auth.Register}>Зарегистрироваться</Link>
        </p>

        <LoginForm />

        <button className="flex items-center gap-x-1 text-blue-600 transition-all duration-300 hover:text-blue-400 text-sm py-1 px-2 mt-2" type="button" onClick={() => navigate(-1)}>
          <Icons.arrowLeft width={14} height={14} /> Назад
        </button>
      </div>
    </main>
  );
}
