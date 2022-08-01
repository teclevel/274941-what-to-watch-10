import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { films, promo } from './mocks/films';
import { reviews } from './mocks/review';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';


store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App
        filmPromo={promo}
        films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
