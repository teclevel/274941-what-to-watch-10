import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import { Films } from '../../types/films';

// const SIMILAR_FILMS_MAX = 4;
const FILMS_CARD_COUNT = 9;

type FilmPageProps = {
  films: Films,
};

function FilmPage({ films }: FilmPageProps): JSX.Element {
  const { id } = useParams();
  const [film] = films.filter((el) => el.id === Number(id));

  const { backgroundImage, name, genre, released, posterImage, rating, scoresCount, director, starring, description } = film;

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
              {/*overview  */}
              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                {/*                 <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>
                <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>
 */}
                <p>{description}</p>
                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {starring} and other</strong></p>
              </div>
              {/*overview  */}

              {/* details*/}
              {/* <div class="film-card__text film-card__row">
              <div class="film-card__text-col">
                <p class="film-card__details-item">
                  <strong class="film-card__details-name">Director</strong>
                  <span class="film-card__details-value">Wes Anderson</span>
                </p>
                <p class="film-card__details-item">
                  <strong class="film-card__details-name">Starring</strong>
                  <span class="film-card__details-value">
                    Bill Murray, <br>
                    Edward Norton, <br>
                    Jude Law, <br>
                    Willem Dafoe, <br>
                    Saoirse Ronan, <br>
                    Tony Revoloru, <br>
                    Tilda Swinton, <br>
                    Tom Wilkinson, <br>
                    Owen Wilkinson, <br>
                    Adrien Brody, <br>
                    Ralph Fiennes, <br>
                    Jeff Goldblum
                  </span>
                </p>
              </div>

              <div class="film-card__text-col">
                <p class="film-card__details-item">
                  <strong class="film-card__details-name">Run Time</strong>
                  <span class="film-card__details-value">1h 39m</span>
                </p>
                <p class="film-card__details-item">
                  <strong class="film-card__details-name">Genre</strong>
                  <span class="film-card__details-value">Comedy</span>
                </p>
                <p class="film-card__details-item">
                  <strong class="film-card__details-name">Released</strong>
                  <span class="film-card__details-value">2014</span>
                </p>
              </div>
            </div> */}
              {/* details*/}

              {/* review */}
              {/* <div class="film-card__reviews film-card__row">
              <div class="film-card__reviews-col">
                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed films in years.</p>

                    <footer class="review__details">
                      <cite class="review__author">Kate Muir</cite>
                      <time class="review__date" datetime="2016-12-24">December 24, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">8,9</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                    <footer class="review__details">
                      <cite class="review__author">Bill Goodykoontz</cite>
                      <time class="review__date" datetime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">8,0</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.</p>

                    <footer class="review__details">
                      <cite class="review__author">Amanda Greever</cite>
                      <time class="review__date" datetime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">8,0</div>
                </div>
              </div>
              <div class="film-card__reviews-col">
                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                    <footer class="review__details">
                      <cite class="review__author">Matthew Lickona</cite>
                      <time class="review__date" datetime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">7,2</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer class="review__details">
                      <cite class="review__author">Paula Fleri-Soler</cite>
                      <time class="review__date" datetime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">7,6</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer class="review__details">
                      <cite class="review__author">Paula Fleri-Soler</cite>
                      <time class="review__date" datetime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">7,0</div>
                </div>
              </div>
            </div> */}
              {/* review */}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {
              <ListFilms films={films} />
            }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
