import { useState, useRef, useEffect, useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import Screen from './Screen';
import Controls from './Controls';

function Player(props) {
  const { currentPlaylist } = useContext(PlaylistContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState();
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
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setCurrentTime(playerRef.current.currentTime);
      }, 250);
      return () => {
        clearInterval(intervalId);
      };
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
    setCurrentTime(0);
    if (!props.isLastSong()) {
      props.onNextSong();
    } else {
      setIsPlaying(false);
    }
  }

  function prevSongHandler() {
    setCurrentTime(0);
    if (playerRef.current.currentTime < 0.6 && !props.isFirstSong()) {
      props.onPrevSong();
    } else {
      playerRef.current.currentTime = 0;
    }
  }

  function nextSongHandler() {
    props.onNextSong();
    setCurrentTime(0);
  }

  function playPauseHandler() {
    if (!props.src) {
      props.onFirstPlay();
    } else {
      setIsPlaying((prevState) => !prevState);
    }
  }

  const duration = playerRef.current?.duration
    ? playerRef.current.duration
    : undefined;

  return (
    <div className='player'>
      <Screen
        songNumber={props.songNumber}
        totalSongs={props.totalSongs}
        data={props.data}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
        isMenuView={isMenuView}
        onMenuToggle={menuToggleHandler}
      />
      <Controls
        onMenuToggle={menuToggleHandler}
        onPrevSong={prevSongHandler}
        onPlayPause={playPauseHandler}
        onNextSong={nextSongHandler}
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
