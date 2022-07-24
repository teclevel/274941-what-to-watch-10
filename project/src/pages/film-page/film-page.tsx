import { Link, useNavigate, useParams } from 'react-router-dom';
// import DetailsTab from '../../components/details-tab/details-tab';
import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import Logo from '../../components/logo/logo';
import OverViewTab from '../../components/overveiw-tab/overveiw-tab';
// import ReviewTab from '../../components/review-tab/review-tab';
import SignOut from '../../components/sign-out/sign-out';
import { Films } from '../../types/films';
import { Reviews } from '../../types/reviews';

// const SIMILAR_FILMS_MAX = 4;
const FILMS_CARD_COUNT = 9;

type FilmPageProps = {
  films: Films,
  reviews: Reviews
};

function FilmPage({ films, reviews }: FilmPageProps): JSX.Element {
  const { id } = useParams();
  const [film] = films.filter((el) => el.id === Number(id));

  const { backgroundImage, name, genre, released, posterImage } = film;

  const navigate = useNavigate();

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
            <SignOut />
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

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              <OverViewTab film={film} />
              {/* <DetailsTab film={film} /> */}
              {/* <ReviewTab reviews={reviews} /> */}

            </div>
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
