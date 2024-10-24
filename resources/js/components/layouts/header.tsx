import React from 'react';
import Logo from '../ui/logo';

export default function Header(): JSX.Element {
  return (
    <header className="border-b">
      <div className="container flex items-center py-2 lg:py-4">
        <Logo />
      </div>
    </header>
  );
}
