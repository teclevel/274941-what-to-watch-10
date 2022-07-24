import { Link } from 'react-router-dom';
import { Film } from '../../types/films';

type FilmsCardProps = {
  film: Film,
  getId: (id: number) => void,
}

function FilmsCard({ film, getId }: FilmsCardProps,): JSX.Element {
  const { previewImage, name } = film;

  const mouseHandle = () => {
    getId(film.id);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={mouseHandle}
    >
      <div className="small-film-card__image">
        <img src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmsCard;
