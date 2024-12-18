function DisplaySong(props) {
  const [songName, artist] = props.data
    ? [props.data.name, props.data.artist]
    : [undefined, undefined];

  return (
    <div className='song'>
      <p className='song-field'>{songName}</p>
      <p className='song-field'>{artist}</p>
    </div>
  );
}

export default DisplaySong;
