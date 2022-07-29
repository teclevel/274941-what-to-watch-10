import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import ListGenres from '../../components/list-genres/list-genres';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import { useAppSelector } from '../../hooks';
import { Film, Films } from '../../types/films';

// const NUMBER_FILMS = 20;

type MainProps = {
  filmPromo: Film,
  genres: string[]
}

function Main({ filmPromo, genres }: MainProps): JSX.Element {
  const { id, backgroundImage, posterImage, name, genre, released } = filmPromo;
  const films = useAppSelector((state) => state.films);
  const genreCurrent = useAppSelector((state) => state.genre);
console.log(films);
console.log(genreCurrent);

  function getListFiltered(list: Films, genreName: string): Films {
    return list.filter((film) => film.genre === genreName);
  }

  const filmsFiltered = getListFiltered(films, genreCurrent);

  const navigate = useNavigate();
  const onClickPlayHandler = () => navigate(`/player/${id.toString()}`);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />{/* отключить переход по ссылке */}
          <SignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button"
                  type="button"
                  onClick={onClickPlayHandler}
                >
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
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListGenres genres={genres} />

          <ListFilms films={filmsFiltered} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />{/* отключить переход по ссылке */}
      </div>
    </>
  );
}

export default Main;
