import { useState, useEffect } from 'react';
import { initFirebase, getPlaylists } from './util/firebase';
import PlaylistContext from './contexts/PlaylistContext';
import PlayerWrapper from './components/PlayerWrapper';
import './App.css';

function App() {
  const [playlist, setPlaylist] = useState('');

  useEffect(() => {
    getPlaylists().then((playlists) => {
      setPlaylist(playlists[0]);
    });
  }, []);

  function togglePlaylist() {
    const newPlaylist = playlist === 'fm-day' ? 'fm-night' : 'fm-day';
    setPlaylist(newPlaylist);
  }

  initFirebase();
  return (
    <PlaylistContext.Provider value={{ playlist, setPlaylist }}>
      <main data-theme={playlist}>
        <PlayerWrapper />
        <button className='testbtn' onClick={togglePlaylist}>
          Playlist
        </button>
      </main>
    </PlaylistContext.Provider>
  );
}

export default App;
