import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
