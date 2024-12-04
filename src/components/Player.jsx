import { useState, useRef, useEffect } from 'react';
import Display from './Display';

function Player(props) {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!props.src) return;
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!playerRef) return;
    playerRef.current.addEventListener('ended', songEndHandler);
    return () => {
      playerRef.current.removeEventListener('ended', songEndHandler);
    };
  }, [props.src]);

  function playPauseHandler() {
    if (!props.src) {
      props.onFirstPlay();
    } else {
      setIsPlaying((prevState) => !prevState);
    }
  }

  function songEndHandler() {
    if (!props.isLastSong()) {
      props.onNextSong();
    } else {
      setIsPlaying(false);
    }
  }

  function prevSongHandler() {
    if (playerRef.current.currentTime < 0.6) {
      props.onPrevSong();
    } else {
      playerRef.current.currentTime = 0;
    }
  }

  function nextSongHandler() {
    props.onNextSong();
  }

  function isDisabledPrev() {
    return !props.src || props.isFirstSong();
  }

  function isDisabledNext() {
    return !props.src || props.isLastSong();
  }

  return (
    <div className='player'>
      <Display data={props.data} />
      <div className='control-wheel'>
        <button onClick={prevSongHandler} disabled={isDisabledPrev()}>
          Prev
        </button>
        <button onClick={playPauseHandler}>Play/Pause</button>
        <button onClick={nextSongHandler} disabled={isDisabledNext()}>
          Next
        </button>
      </div>
      <audio
        ref={playerRef}
        src={props.src}
        title={props.src}
        autoPlay={isPlaying}
      />
    </div>
  );
}

export default Player;
