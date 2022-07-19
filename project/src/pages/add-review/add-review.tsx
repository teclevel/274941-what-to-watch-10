import { Link, useParams } from 'react-router-dom';
import Form from '../../components/form/form';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import { Films } from '../../types/films';

type AddReviewProps = {
  films: Films,
};

function AddReview({ films }: AddReviewProps): JSX.Element {
  const { id } = useParams();
  const [film] = films.filter((el) => el.id === Number(id));
  const { name, backgroundImage, posterImage } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <SignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <Form />
      </div>

    </section>
  );
}

export default AddReview;
