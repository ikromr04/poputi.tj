import React from 'react';
import RegisterForm from '../../forms/register-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { Icons } from '../../icons';
import { useAppSelector } from '../../../hooks';
import { getAuthStatus } from '../../../store/auth-slice/auth-selector';

export default function RegisterPage(): JSX.Element {
  const
    navigate = useNavigate(),
    authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) return <Navigate to={AppRoute.Home} />;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-illustrations bg-white bg-bottom bg-contain bg-no-repeat md:bg-transparent">

      <div className="w-[90vw] max-w-96 mx-auto mb-16 md:bg-white md:shadow-md sm:rounded-lg md:p-10 md:mb-20 xl:mb-28 mt-8 md:mt-12">
        <h1 className="title">Регистрация</h1>

        <p className="text-gray-600 mb-6">
          Есть аккаунт? <Link className="text-blue-600 transition-all duration-300 hover:text-blue-400" to={AppRoute.Auth.Login}>Войти</Link>
        </p>

        <RegisterForm />

        <button className="flex items-center gap-x-1 text-blue-600 transition-all duration-300 hover:text-blue-400 text-sm py-1 px-2 mt-2" type="button" onClick={() => navigate(-1)}>
          <Icons.arrowLeft width={14} height={14} /> Назад
        </button>
      </div>
    </main>
  );
}
