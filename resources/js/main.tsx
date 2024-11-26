import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './store';
import dayjs from 'dayjs';
import { checkAuthAction } from './store/auth-slice/auth-api-actions';

store.dispatch(checkAuthAction());
dayjs.locale('ru');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
