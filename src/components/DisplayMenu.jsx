import { useState, useEffect, useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import { getPlaylists } from '../util/firebase';

function DisplayMenu(props) {
  const [playlistNames, setPlaylistNames] = useState([]);
  const { setPlaylist } = useContext(PlaylistContext);

  useEffect(() => {
    getPlaylists().then((playlists) => {
      setPlaylistNames(playlists);
    });
  }, []);

  function selectPlaylistHandler(e) {
    props.onSelectPlaylist();
    setPlaylist(e.target.innerText);
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
