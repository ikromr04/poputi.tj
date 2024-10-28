import React from 'react';
import PageLayout from '../layouts/page-layout';
import SearchForm from '../ui/search-form';
import Places from '../ui/places';

export default function MainPage(): JSX.Element {
  return (
    <PageLayout>
      <main>
        <div className="bg-blue-500">
          <h1 className="container text-3xl font-bold text-center text-white py-6">Поездки на ваш выбор по самым низким ценам</h1>

          <SearchForm className="container" />
          <Places />
        </div>
      </main>
    </PageLayout>
  );
}
