import DisplayMenu from './DisplayMenu';
import DisplaySong from './DisplaySong';

function Screen(props) {
  return (
    <div className='screen'>
      <div className='screen-header'>
        {props.isMenuView ? (
          <></>
        ) : (
          <p className='screen-header-playpause'>
            {props.isPlaying ? 'pl' : 'ps'}
          </p>
        )}
        <p className='screen-header-text'>
          {props.isMenuView ? 'mp3' : 'Now Playing'}
        </p>
        <p className='screen-header-battery'>Bat</p>
      </div>
      <div className='screen-display'>
        {props.isMenuView ? (
          <DisplayMenu onSelectPlaylist={props.onMenuToggle} />
        ) : (
          <DisplaySong
            data={props.data}
            currentIdx={props.currentIdx}
            lastIdx={props.lastIdx}
          />
        )}
      </div>
    </div>
  );
}

export default Screen;
