import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';

type ListGenresProps = {
  genres: string[]
}

function ListGenres({ genres }: ListGenresProps): JSX.Element {
  const dispatch = useAppDispatch();
  const genreCurrent = useAppSelector((state) => state.genre);

  const itemClass = 'catalog__genres-item';
  const itemActiveClass = 'catalog__genres-item catalog__genres-item--active';

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((el) => (
          <li key={el}
            className={el === genreCurrent ? itemActiveClass : itemClass}
            onClick={() => dispatch(changeGenre(el))}
          >
            <Link to="#" className="catalog__genres-link">{el}</Link>
          </li>
        ))
      }
    </ul>
  );
}

export default ListGenres;
