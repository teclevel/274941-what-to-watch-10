import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films, promo } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const genres = ['Comedies', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];


root.render(
  <React.StrictMode>
    <App filmPromo={promo}
      genres={genres}
      films={films}
    />
  </React.StrictMode>,
);
