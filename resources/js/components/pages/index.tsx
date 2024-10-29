import React from 'react';
import PageLayout from '../layouts/page-layout';
import MainSearch from '../forms/main-search';

export default function MainPage(): JSX.Element {
  return (
    <PageLayout>
      <main>
        <div className="bg-blue-400 pb-36 -mb-36 md:pb-28 md:-mb-28 lg:pb-8 lg:-mb-8 lg:min-h-[272px] bg-vitrin-gradient lg:bg-vitrin-image bg-center bg-cover">
          <h1 className="container text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white py-6">Поездки на ваш выбор по самым низким ценам</h1>
        </div>
        <MainSearch className="container" />
      </main>
    </PageLayout>
  );
}
