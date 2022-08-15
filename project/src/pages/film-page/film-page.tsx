import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import LoginUser from '../../components/login-user/login-user';
import Logo from '../../components/logo/logo';
import ListTabs from '../../components/tabs/list-tabs/list-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchLoadFilmAction } from '../../store/api-actions';

// const SIMILAR_FILMS_MAX = 4;
const FILMS_CARD_COUNT = 4;

function FilmPage(): JSX.Element | null {
  const { id } = useParams();
  const films = useAppSelector((state) => state.rawFilms);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLoadFilmAction(id));
    return () => { console.log('wilMount'); };
  }, [dispatch, id]);

  const film = useAppSelector((state) => state.film);

  if (!film) { return null; }

  const { name, genre, released, posterImage, backgroundImage } = film;
  const onClickHandler = () => navigate(`/player/${film.id}`);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <LoginUser />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={onClickHandler} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{FILMS_CARD_COUNT}</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <ListTabs film={film} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <ListFilms films={films} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
