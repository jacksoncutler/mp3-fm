import { useState, useRef, useEffect, useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import DisplaySong from './DisplaySong';
import DisplayMenu from './DisplayMenu';
import Controls from './Controls';

function Player(props) {
  const { playlist } = useContext(PlaylistContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMenuView, setIsMenuView] = useState(false);
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
      <div className='screen'>
        <div className='screen-header'>
          {isMenuView ? <></> : <p className='screen-header-playpause'>{isPlaying ? 'pl' : 'ps'}</p>}
          <p className='screen-header-text'>{isMenuView ? 'mp3' : 'Now Playing'}</p>
          <p className='screen-header-battery'>Bat</p>
        </div>
        <div className='screen-display'>
          {isMenuView ? (
            <DisplayMenu onSelectPlaylist={menuToggleHandler} />
          ) : (
            <DisplaySong data={props.data} />
          )}
        </div>
      </div>
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
