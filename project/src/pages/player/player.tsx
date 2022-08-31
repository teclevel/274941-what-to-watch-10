import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/film-screening/selector';
import { getFilmTime } from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';


function Player(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const films = useAppSelector(getFilms);
  const [film] = films.filter((el) => el.id === Number(id));
  const { videoLink, posterImage } = film;
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = videoRef.current;
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [togglerPos, setTogglerPos] = useState(0);


  useEffect(() => {
    if (video === null) {
      return;
    }

    const updateTogglerPos = () => {
      if (video !== null) {
        setTogglerPos(video.currentTime / video.duration * 100);
      }
      if (video?.ended) {
        setIsPlaying(false);
      }
    };

    const addIsLoading = () => setIsLoading(true);
    const removeIsLoading = () => setIsLoading(false);

    video.addEventListener('timeupdate', updateTogglerPos);
    video.addEventListener('loadstart', addIsLoading);
    video.addEventListener('canplay', removeIsLoading);

    if (isPlaying) {
      video.play();
      video.muted = false;
      return;
    }

    video.pause();

    return () => {
      if (video === null) { return; }
      video.addEventListener('timeupdate', updateTogglerPos);
      video.addEventListener('loadstart', addIsLoading);
      video.addEventListener('canplay', removeIsLoading);
    };

  }, [video, isPlaying, film]);

  if (!film) { return <LoadingScreen />; }

  return (
    <div className="player">
      {isLoading && <LoadingScreen />}
      <video src={videoLink} className="player__video"
        poster={posterImage}
        ref={videoRef}
        muted
      >
      </video>
      <button type="button" className="player__exit"
        onClick={() => navigate(-1)}
      >Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress"
              value={togglerPos}
              max="100"
            >
            </progress>
            <div className="player__toggler"
              style={{ left: `${togglerPos}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">-
            {
              video
                ? getFilmTime(video.duration - video.currentTime)
                : '00:00:00'
            }
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {
              isPlaying
                ?
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                :
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
            }
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen"
            onClick={() => video?.requestFullscreen()}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >
  );
}

export default Player;
