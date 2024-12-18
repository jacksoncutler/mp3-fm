import ScreenHeader from './ScreenHeader';
import DisplayMenu from './DisplayMenu';
import DisplaySong from './DisplaySong';

function Screen(props) {
  return (
    <div className='screen'>
      <ScreenHeader 
        isPlaying={props.isPlaying}
        isMenuView={props.isMenuView}
      />
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
