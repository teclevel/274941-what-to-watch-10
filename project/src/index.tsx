import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films, promo } from './mocks/films';
import { reviews } from './mocks/review';
import { store } from './store';
import { Films } from './types/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

function getListGenres(list: Films) {
  const set = new Set<string>();
  list.forEach((el) => set.add(el.genre));

  return ['All genres', ...Array.from(set)];
}

const genres = getListGenres(films);

root.render(
  <Provider store={store}>
    <App
      filmPromo={promo}
      genres={genres}
      films={films}
      reviews={reviews}
    />
  </Provider>,
);
