import React from 'react';
import PageLayout from '../../layouts/page-layout';
import PrivateRoute from '../../private-route';

export default function PublishTripPage(): JSX.Element {
  return (
    <PageLayout>
      <PrivateRoute>
        Publish Trip
      </PrivateRoute>
    </PageLayout>
  );
}
