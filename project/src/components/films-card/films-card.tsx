import { Film } from '../../types/films';

type FilmsCardProps = {
  film: Film
}

function FilmsCard({ film }: FilmsCardProps): JSX.Element {
  const { cover, title } = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={cover}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
}

export default FilmsCard;
