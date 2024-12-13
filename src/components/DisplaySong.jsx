function DisplaySong(props) {
  const [songName, artist] = props.data
    ? [props.data.name, props.data.artist]
    : [undefined, undefined];

  return (
    <>
      <p className='display-field'>{songName}</p>
      <p className='display-field'>{artist}</p>
    </>
  );
}

export default DisplaySong;
