import { useState, useEffect } from 'react';
import { initFirebase, getPlaylists } from './util/firebase';
import PlaylistContext from './contexts/PlaylistContext';
import PlayerWrapper from './components/PlayerWrapper';
import './App.css';

function App() {
  const [playlistNames, setPlaylistNames] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState('');

  useEffect(() => {
    getPlaylists().then((playlists) => {
      setPlaylistNames(playlists);
      setCurrentPlaylist(playlists[0]);
    });
  }, []);

  initFirebase();
  return (
    <PlaylistContext.Provider
      value={{ playlistNames, currentPlaylist, setCurrentPlaylist }}
    >
      <main data-theme={currentPlaylist}>
        <PlayerWrapper />
      </main>
    </PlaylistContext.Provider>
  );
}

export default App;
