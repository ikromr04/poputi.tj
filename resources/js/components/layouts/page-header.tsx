import React from 'react';
import MainLogo from './main-logo';
import UserNavigation from './user-navigation';
import PageNavigation from './page-navigation';

export default function PageHeader(): JSX.Element {
  return (
    <header className="relative z-10 bg-white border-b">
      <div className="container grid items-center grid-cols-3 py-1 lg:flex lg:py-2">
        <UserNavigation className="lg:order-3" />
        <MainLogo className="justify-self-center lg:order-1" />
        <PageNavigation className="justify-self-end lg:order-2" />
      </div>
    </header>
  );
}
