import { useState, useRef, useEffect, useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import Screen from './Screen';
import Controls from './Controls';

function Player(props) {
  const { currentPlaylist } = useContext(PlaylistContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuView, setIsMenuView] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    setIsPlaying(currentPlaylist && props.src);
  }, [currentPlaylist, props.src]);

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

  function menuToggleHandler() {
    setIsMenuView((prevState) => !prevState);
  }

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
      <Screen 
        data={props.data}
        currentIdx={props.currentIdx}
        lastIdx={props.lastIdx}
        isPlaying={isPlaying}
        isMenuView={isMenuView}
        onMenuToggle={menuToggleHandler}
      />
      <Controls
        onMenuToggle={menuToggleHandler}
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
