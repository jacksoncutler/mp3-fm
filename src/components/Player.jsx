import { useState, useRef, useEffect, useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import DisplayWrapper from './DisplayWrapper';
import DisplaySong from './DisplaySong';
import Controls from './Controls';

function Player(props) {
  const { playlist } = useContext(PlaylistContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playlist) setIsPlaying(true);
  }, [playlist]);

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

  function songEndHandler() {
    if (!props.isLastSong()) {
      props.onNextSong();
    } else {
      setIsPlaying(false);
    }
  }

  function prevSongHandler() {
    if (playerRef.current.currentTime < 0.6 && !props.isFirstSong()) {
      props.onPrevSong();
    } else {
      playerRef.current.currentTime = 0;
    }
  }

  function playPauseHandler() {
    if (!props.src) {
      props.onFirstPlay();
    } else {
      setIsPlaying((prevState) => !prevState);
    }
  }

  return (
    <div className='player'>
      <DisplayWrapper children={<DisplaySong data={props.data} />} />
      <Controls
        onPrevSong={prevSongHandler}
        onPlayPause={playPauseHandler}
        onNextSong={props.onNextSong}
        isDisabledNext={props.isLastSong}
      />
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
