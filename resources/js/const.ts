export const AppRoute = {
  Index: '/',
  Auth: {
    Index: '/auth',
    Login: '/auth/login',
    Register: '/auth/register',
  },
  Trips: {
    Index: '/trip',
  },
  Help: {
    Index: '/help',
  },
  Search: {
    Trip: '/search/trip',
  },
  Publish: {
    Trip: '/publish/trip'
  },
  About: '/about',
  Scam: '/scam',
};

export const APIRoute = {
  Places: {
    Index: '/places',
  }
};

export enum SliceName {
  Auth = 'Auth',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
