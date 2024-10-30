import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainLogo from './main-logo';
import dayjs from 'dayjs';

export default function PageFooter(): JSX.Element {
  return (
    <footer className="mt-auto bg-gray-200">
      <ul className="container flex items-center justify-center gap-x-4 py-6 font-semibold text-slate-600 border-b border-slate-400">
        <li>
          <Link to={AppRoute.About}>
            О нас
          </Link>
        </li>
        <li>
          <Link to={AppRoute.Trips.Index}>
            Поездки
          </Link>
        </li>
        <li>
          <Link to={AppRoute.Help.Index}>
            Центр помощи
          </Link>
        </li>
      </ul>

      <div className="container flex justify-between flex-wrap items-center gap-x-4 py-4 font-medium text-gray-500">
        <Link to="#">
          Условия использования
        </Link>
        <div className="flex items-center font-semibold">
          <MainLogo />, {dayjs().format('YYYY')} &copy;
        </div>
      </div>
    </footer>
  );
}
