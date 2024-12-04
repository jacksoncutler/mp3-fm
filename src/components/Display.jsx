function Display(props) {
  const [songName, artist] = props.data
    ? [props.data.name, props.data.artist]
    : [undefined, undefined];

  return (
    <div className='display'>
      <p>{songName}</p>
      <p>{artist}</p>
    </div>
  );
}

export default Display;
