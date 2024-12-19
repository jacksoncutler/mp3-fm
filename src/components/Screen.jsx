import ScreenHeader from './ScreenHeader';
import DisplayMenu from './DisplayMenu';
import DisplaySong from './DisplaySong';

function Screen(props) {
  return (
    <div className='screen'>
      <ScreenHeader isPlaying={props.isPlaying} isMenuView={props.isMenuView} />
      <div className='screen-display'>
        {props.isMenuView ? (
          <DisplayMenu onSelectPlaylist={props.onMenuToggle} />
        ) : (
          <DisplaySong
            isPlaying={props.isPlaying}
            songNumber={props.songNumber}
            totalSongs={props.totalSongs}
            data={props.data}
            currentTime={props.currentTime}
            duration={props.duration}
          />
        )}
      </div>
    </div>
  );
}

export default Screen;
