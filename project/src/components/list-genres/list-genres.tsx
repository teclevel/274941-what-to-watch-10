// import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { getGenre } from '../../store/action';

type ListGenresProps = {
  genres: string[]
}

function ListGenres({ genres }: ListGenresProps): JSX.Element {
  const dispatch = useAppDispatch();

  // const itemActive = 'catalog__genres-item--active';
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((el) => (
          <li key={el} className="catalog__genres-item item"
            // eslint-disable-next-line no-console
            onClick={() => dispatch(getGenre)}
          >
            <Link to="#" className="catalog__genres-link">{el}</Link>
          </li>
        ))
      }
    </ul>
  );
}

export default ListGenres;
