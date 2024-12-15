import { useState, useEffect } from 'react';
import { getPlaylists, getSongList, getSongURL } from '../util/firebase';
import { shuffleSongs } from '../util/helpers';
import Player from './Player';

function PlayerWrapper() {
  const [playlist, setPlaylist] = useState(null);
  const [songIdx, setSongIdx] = useState(null);
  const [songList, setSongList] = useState([]);
  const [songURL, setSongURL] = useState('');

  useEffect(() => {
    getPlaylists().then((playlists) => {
      setPlaylist(playlists[0]);
    });
  }, []);

  useEffect(() => {
    if (songIdx !== null)
      getSongURL(playlist, songList[songIdx].filename).then((url) => {
        setSongURL(url);
      });
  }, [songIdx]);

  async function initListHandler() {
    const list = await getSongList(playlist);
    shuffleSongs(list);
    setSongList(list);
    setSongIdx(0);
  }

  function prevSongHandler() {
    setSongIdx((prevState) => prevState - 1);
  }

  function nextSongHandler() {
    setSongIdx((prevState) => prevState + 1);
  }

  function firstSongHandler() {
    return !songURL || songIdx === 0;
  }

  function lastSongHandler() {
    return !songURL || songIdx === songList.length - 1;
  }

  const songData =
    songList.length > 0 && songIdx !== null ? songList[songIdx] : undefined;

  return (
    <div className='container'>
      <Player
        src={songURL}
        data={songData}
        onFirstPlay={initListHandler}
        onPrevSong={prevSongHandler}
        onNextSong={nextSongHandler}
        isFirstSong={firstSongHandler}
        isLastSong={lastSongHandler}
      />
    </div>
  );
}

export default PlayerWrapper;
