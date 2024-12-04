function Display(props) {
  const [songName, artist] = props.data
    ? [props.data.name, props.data.artist]
    : [undefined, undefined];

  return (
    <div className='display'>
      <p className='display-field'>{songName}</p>
      <p className='display-field'>{artist}</p>
    </div>
  );
}

export default Display;
