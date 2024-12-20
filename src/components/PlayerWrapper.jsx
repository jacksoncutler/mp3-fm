import { useState, useEffect, useContext } from 'react';
import { getSongList, getSongURL } from '../util/firebase';
import PlaylistContext from '../contexts/PlaylistContext';
import { shuffleSongs } from '../util/helpers';
import Player from './Player';

function PlayerWrapper() {
  const { currentPlaylist } = useContext(PlaylistContext);
  const [songIdx, setSongIdx] = useState(null);
  const [songList, setSongList] = useState([]);
  const [songURL, setSongURL] = useState('');

  useEffect(() => {
    if (currentPlaylist) {
      initList();
      setSongIdx(null);
      setSongURL('');
    }
  }, [currentPlaylist]);

  useEffect(() => {
    if (songIdx !== null) {
      getSongURL(currentPlaylist, songList[songIdx].filename).then((url) => {
        setSongURL(url);
      });
    }
  }, [songIdx]);

  async function initList() {
    const list = await getSongList(currentPlaylist);
    shuffleSongs(list);
    setSongList(list);
  }

  async function initPlayer() {
    await initList();
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
        songNumber={songIdx + 1}
        totalSongs={songList.length}
        onFirstPlay={initPlayer}
        onPrevSong={prevSongHandler}
        onNextSong={nextSongHandler}
        isFirstSong={firstSongHandler}
        isLastSong={lastSongHandler}
      />
    </div>
  );
}

export default PlayerWrapper;
