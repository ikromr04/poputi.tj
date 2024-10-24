import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Logo(): JSX.Element {
  const { pathname } = useLocation();

  if (pathname === AppRoute.Index) {
    return (
      <div className="max-w-max max-h-max">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/logo-full.svg" width={64} height={25} />
          <source srcSet="/images/logo.svg" width={32} height={23} />
          <img className="w-10 h-auto lg:h-10 lg:w-auto" alt="Логотип Poputi TJ" />
        </picture>
      </div>
    );
  }

  return (
    <Link className="max-w-max max-h-max" to="/">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/logo-full.svg" width={64} height={25} />
        <source srcSet="/images/logo.svg" width={32} height={23} />
        <img className="w-10 h-auto lg:h-10 lg:w-auto" alt="На главную страницу" />
      </picture>
    </Link>
  );
}
