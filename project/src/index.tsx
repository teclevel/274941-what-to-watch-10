import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const filmPromo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014
};

const genres = ['Comedies', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];


root.render(
  <React.StrictMode>
    <App filmPromo={filmPromo}
      genres={genres}
      films={films}
    />
  </React.StrictMode>,
);
