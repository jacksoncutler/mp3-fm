import { formatTime } from '../util/helpers';

function DisplaySong(props) {
  const [songName, artist] = props.data
    ? [props.data.name, props.data.artist]
    : [undefined, undefined];
  const songNumber = `${props.songNumber} of ${props.totalSongs}`;
  const songTime = `${formatTime(props.currentTime)} / ${formatTime(
    props.duration
  )}`;

  return props.data ? (
    <>
      <div className='song-number'>{songNumber}</div>
      <div className='song-data'>
        <p className='song-data-field'>{songName}</p>
        <p className='song-data-field'>{artist}</p>
      </div>
      <div className='song-time'>{songTime}</div>
    </>
  ) : (
    <></>
  );
}

export default DisplaySong;
