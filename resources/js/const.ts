export const AppRoute = {
  Home: '/',
  Auth: {
    Index: '/auth',
    Login: '/auth/login',
    Register: '/auth/register',
    ForgotPassword: '/auth/forgot-password',
    ResetPassword: '/auth/reset-password/:token',
    Profile: '/auth/profile',
    Trips: '/auth/trips',
  },
  Trips: {
    Index: '/trips',
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
  },
  Auth: {
    Login: '/auth/login',
    ForgotPassword: '/auth/forgot-password',
    ResetPassword: '/auth/reset-password',
    Register: '/auth/register',
  },
};

export enum SliceName {
  Auth = 'Auth',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
