import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films, promo } from './mocks/films';
import { reviews } from './mocks/review';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// const genres = ['Comedies', 'Documentary', 'Dramas', 'Horror'];


root.render(
  <Provider store={store}>
    <App
      filmPromo={promo}
      // genres={genres}
      films={films}
      reviews={reviews}
    />
  </Provider>,
);
