import { useRef } from 'react';

function Player(props) {
  const playerRef = useRef(null);

  return (
    <div className='player'>
      <audio ref={playerRef} controls src={props.src} title={props.title} />
    </div>
  );
}

export default Player;
