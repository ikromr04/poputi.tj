import React, { ReactNode } from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}
