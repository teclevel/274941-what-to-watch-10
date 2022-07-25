import { useState } from 'react';
import { Films } from '../../types/films';
import FilmsCard from '../films-card/films-card';


type ListFilmsProps = {
  films: Films
}

function ListFilms({ films }: ListFilmsProps): JSX.Element {
  const [filmId, setFilmId] = useState('');

  const getId = (id: number): void => setFilmId(id.toString());
  // eslint-disable-next-line no-console
  console.log(`film ${filmId}`);

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmsCard key={film.id}
            getId={getId}
            film={film}
          />))
      }
    </div>
  );
}

export default ListFilms;
