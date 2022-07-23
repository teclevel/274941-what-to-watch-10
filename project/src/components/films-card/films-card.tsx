import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmsCardProps = {
  film: Film,
  getId: (id: number) => void,
}

function FilmsCard({ film, getId }: FilmsCardProps,): JSX.Element {
  const { previewImage, name, previewVideoLink } = film;
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  // const [isMuted, setMuted] = useState(muted);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  console.log(videoRef.current)
  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const mouseOverHandle = () => {
    getId(film.id);
    // setIsPlaying(true);

  };
  // const mouseOutHandle = () => {
  //   // getId(film.id);
  //   setIsPlaying(false);

  // };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={mouseOverHandle}
      // onMouseOut={mouseOutHandle}
    >
      <div className="small-film-card__image">
        <VideoPlayer src={previewVideoLink}
          poster={previewImage}
          autoPlay
          isLoading={isLoading}

        />
        {/* <img src={previewImage}
          alt={name}
          width="280"
          height="175"
        /> */}
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
