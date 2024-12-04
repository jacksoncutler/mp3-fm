import { useState, useEffect } from 'react';
import { getSongList, getSongURL } from '../util/firebase';
import { shuffleSongs } from '../util/helpers';
import Player from './Player';

function AudioInterface() {
  const [songIdx, setSongIdx] = useState(null);
  const [songList, setSongList] = useState([]);
  const [songURL, setSongURL] = useState('');

  useEffect(() => {
    if (songIdx !== null)
      getSongURL(songList[songIdx].filename).then((url) => {
        setSongURL(url);
      });
  }, [songIdx]);

  async function initListHandler() {
    const list = await getSongList();
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
    return songIdx === 0;
  }

  function lastSongHandler() {
    return songIdx === songList.length - 1;
  }

  let title;
  if (songList.length > 0 && songIdx !== null) {
    title = `${songList[songIdx].artist} - ${songList[songIdx].name}`;
  }

  return (
    <div className='container'>
      <Player
        src={songURL}
        title={title}
        onFirstPlay={initListHandler}
        onPrevSong={prevSongHandler}
        onNextSong={nextSongHandler}
        isFirstSong={firstSongHandler}
        isLastSong={lastSongHandler}
      />
    </div>
  );
}

export default AudioInterface;
