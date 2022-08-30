// import { useEffect } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchChangeViewStatusAction/* , fetchLoadFavoriteFilmsAction */ } from '../../store/api-actions';
import { getCountFavoriteFilms, getFavoriteFilms } from '../../store/favorite-state/selector';


type ButtonAddMyListProps = {
  filmStatus: {
    idFilm: number,
    statusFilm: boolean | undefined,
  }
}

function ButtonAddMyList({ filmStatus }: ButtonAddMyListProps): JSX.Element | null {
  const { idFilm, statusFilm } = filmStatus;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const dispatch = useAppDispatch();
  const filmsFavoriteCount = useAppSelector(getCountFavoriteFilms);

  useEffect(() => {
    console.log(filmsFavoriteCount);
  }, [filmsFavoriteCount]);


  const onClickViewStatus = () => {
    const status = 1;
    dispatch(fetchChangeViewStatusAction({ idFilm, status }));
    console.log('status1');

  };
  const onClickViewStatus2 = () => {
    const status = 0;
    console.log('status0');

    dispatch(fetchChangeViewStatusAction({ idFilm, status }));
  };
  if (!favoriteFilms) { return null; }
  const favoriteFilmsCount = favoriteFilms.length;

  return (
    <>
      <button className="btn btn--list film-card__button"
        type="button"
        onClick={onClickViewStatus}
      >
        {
          statusFilm ?
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            :
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
        }
        <span>My list</span>
        <span className="film-card__count">{favoriteFilmsCount}</span>
      </button>

      <button className="btn btn--list film-card__button"
        type="button"
        onClick={onClickViewStatus2}
      >
        {
          statusFilm ?
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            :
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
        }
        <span>My list</span>
        <span className="film-card__count">{favoriteFilmsCount}</span>
      </button>
    </>
  );
}

export default ButtonAddMyList;
