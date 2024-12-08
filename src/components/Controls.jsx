function Controls(props) {
  return (
    <div className='control-wheel'>
      <button
        className='control-button prev'
        onClick={props.onPrevSong}
        disabled={props.isDisabledPrev()}
      >
        Prev
      </button>
      <button className='control-button play' onClick={props.onPlayPause}>
        Play
      </button>
      <button
        className='control-button next'
        onClick={props.onNextSong}
        disabled={props.isDisabledNext()}
      >
        Next
      </button>
    </div>
  );
}

export default Controls;
