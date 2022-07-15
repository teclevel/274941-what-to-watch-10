import { Films } from '../../types/films';
import FilmsCard from '../films-card/films-card';


type ListFilmsProps = {
  films: Films
}

function ListFilms({ films }: ListFilmsProps): JSX.Element {

  return (
    <>
      {films.map((film) => (
        <FilmsCard key={film.id} film={film} />
      ))}
    </>
  );
}

export default ListFilms;
