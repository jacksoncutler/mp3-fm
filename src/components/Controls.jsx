function Controls(props) {
  return (
    <div className='control-wheel'>
      <button
        className='control-button prev'
        onClick={props.onPrevSong}
      >
        <svg className='icon seek-back'>
          <use href='#song-seek'></use>
        </svg>
      </button>
      <button className='control-button play' onClick={props.onPlayPause}>
        <svg className='icon'>
          <use href='#play-pause'></use>
        </svg>
      </button>
      <button
        className='control-button next'
        onClick={props.onNextSong}
        disabled={props.isDisabledNext()}
      >
        <svg className='icon'>
          <use href='#song-seek'></use>
        </svg>
      </button>
      <div className='outer-wheel'>
        <div className='inner-wheel' />
      </div>
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:svg='http://www.w3.org/2000/svg'
      >
        <symbol id='play-pause' viewBox='0 0 1600 800'>
          <rect
            id='rect1'
            width='175'
            height='800'
            x='1100'
            y='-1.7763568e-15'
          />
          <path
            id='path1'
            d='m 258.2346,-121.41454 280.38657,485.64383 -560.773173,-2e-5 z'
            transform='matrix(0,1.4266018,-1.6472978,0,599.9941,31.602083)'
          />
          <rect
            id='rect2'
            width='175'
            height='800'
            x='1450'
            y='-1.7763568e-15'
          />
        </symbol>
        <symbol id='song-seek' viewBox='0 0 1600 800'>
          <path
            id='path1'
            d='m 258.2346,-121.41454 280.38657,485.64383 -560.773173,-2e-5 z'
            transform='matrix(0,1.4266018,-1.2354734,0,549.99559,31.602083)'
          />
          <rect
            id='rect2'
            width='175'
            height='800'
            x='1300'
            y='-1.7763568e-15'
          />
          <path
            id='path2'
            d='m 258.2346,-121.41454 280.38657,485.64383 -560.773173,-2e-5 z'
            transform='matrix(0,1.4266018,-1.2354734,0,1149.9956,31.602083)'
          />
        </symbol>
      </svg>
    </div>
  );
}

export default Controls;
