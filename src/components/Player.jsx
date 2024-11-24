import { useState, useRef, useEffect } from 'react';

function Player(props) {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!props.src) return;
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    };
  }, [isPlaying]);

  function playPauseHandler() {
    setIsPlaying((prevState) => !prevState);
  }

  return (
    <div className='player'>
      <button onClick={props.onPrevSong}>Prev</button>
      <button onClick={playPauseHandler}>Play/Pause</button>
      <button onClick={props.onNextSong}>Next</button>
      <audio
        src={props.src}
        title={props.title}
        ref={playerRef}
        autoPlay
      />
    </div>
  );
}

export default Player;
