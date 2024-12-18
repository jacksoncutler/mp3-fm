function ScreenHeader(props) {
  return (
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
  );
}

export default ScreenHeader;
