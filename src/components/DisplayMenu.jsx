import { useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';

function DisplayMenu(props) {
  const { playlistNames, setCurrentPlaylist } = useContext(PlaylistContext);

  function selectPlaylistHandler(e) {
    props.onSelectPlaylist();
    setCurrentPlaylist(e.target.innerText);
  }

  return (
    <ul>
      {playlistNames.map((playlistName, i) => {
        return (
          <li className='playlist' key={i}>
            <button onClick={selectPlaylistHandler}>{playlistName}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayMenu;
