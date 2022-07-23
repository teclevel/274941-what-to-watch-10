// import { useEffect, useRef, useState } from 'react';
// import { Film } from '../../types/films';

type VideoPlayerProps = {
  // film: Film,
  poster: string,
  // autoPlay: boolean,
  // muted?: boolean,
  src: string,
  // children?: JSX.Element
}

function VideoPlayer({ src, poster, autoPlay/* , muted */ }: VideoPlayerProps): JSX.Element {
  // const { previewVideoLink, posterImage } = film;

  // const [isLoading, setIsLoading] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(autoPlay);
  // // const [isMuted, setMuted] = useState(muted);

  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // console.log(videoRef.current)
  // useEffect(() => {
  //   if (videoRef.current === null) {
  //     return;
  //   }

  //   videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

  //   if (isPlaying) {
  //     videoRef.current.play();
  //     return;
  //   }

  //   videoRef.current.pause();
  // }, [isPlaying]);

  return (
    <video className="player__video"
      src={src}
      poster={poster}
      
      // ref={videoRef}
      // isLoading={isLoading}
    // muted={isMuted}
    >
    </video>
    
  );
}

export default VideoPlayer;
