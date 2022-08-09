import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmsCardProps = {
  film: Film,
  getId: (id: number) => void,
}

function FilmsCard({ film, getId }: FilmsCardProps,): JSX.Element {
  const { previewImage, name, previewVideoLink } = film;

  const [isPlayerOn, setIsPlayerOn] = useState(false);
  const [timerId, setTimerId] = useState<number>();


  const mouseOverHandle = () => {
    getId(film.id);
    setTimerId(window.setTimeout(() => setIsPlayerOn(true), 1000));
  };

  const mouseOutHandle = () => {
    clearTimeout(timerId);
    setIsPlayerOn(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={mouseOverHandle}
      onMouseOut={mouseOutHandle}
    >
      <div className="small-film-card__image">
        {
          isPlayerOn ?
            <VideoPlayer src={previewVideoLink}
              poster={previewImage}
              autoPlay
              muted
            /> :
            <img src={previewImage}
              alt={name}
              width="280"
              height="175"
            />
        }
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
