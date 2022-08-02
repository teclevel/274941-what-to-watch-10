import { Link } from 'react-router-dom';
import { ALL_GENRES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filterOfGenre, resetFilter } from '../../store/action';
import { Films } from '../../types/films';


function getListGenres(list: Films) {
  const set = new Set<string>();
  list.forEach((el) => set.add(el.genre));

  return [ALL_GENRES, ...Array.from(set)];
}


function ListGenres(): JSX.Element {
  const genreCurrent = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);
  const genres = getListGenres(films);
  const dispatch = useAppDispatch();

  const itemClass = 'catalog__genres-item';
  const itemActiveClass = 'catalog__genres-item catalog__genres-item--active';

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((el) => (
          <li key={el}
            className={el === genreCurrent ? itemActiveClass : itemClass}
            onClick={
              el === ALL_GENRES ?
                () => {
                  dispatch(resetFilter());
                  dispatch(changeGenre(el));
                } : () => {
                  dispatch(resetFilter());
                  dispatch(changeGenre(el));
                  dispatch(filterOfGenre());
                }
            }
          >
            <Link to="#" className="catalog__genres-link">{el}</Link>
          </li>
        ))
      }
    </ul>
  );
}

export default ListGenres;
