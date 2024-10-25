import React from 'react';
import Logo from '../ui/logo';
import Navigation from './navigation';

export default function Header(): JSX.Element {
  return (
    <header className="relative z-10">
      <div className="container flex items-center py-3 gap-x-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
