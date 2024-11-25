import { useState, useEffect } from 'react';
import { getSongList, getSongURL } from '../util/firebase';
import Display from './Display';
import Player from './Player';

function AudioInterface() {
  const [songIdx, setSongIdx] = useState(null);
  const [songList, setSongList] = useState([]);
  const [songURL, setSongURL] = useState('');

  useEffect(() => {
    getSongList()
      .then((list) => {
        setSongList(list);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (songIdx !== null)
      getSongURL(songList[songIdx].filename)
        .then((url) => {
          setSongURL(url);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [songIdx]);

  function prevSongHandler() {
    setSongIdx(0);
  }

  function nextSongHandler() {
    setSongIdx(17);
  }

  let title;
  if (songList.length > 0 && songIdx !== null) {
    title = `${songList[songIdx].artist} - ${songList[songIdx].name}`;
  }

  return (
    <div className='container'>
      <Display title={title} />
      <Player
        src={songURL}
        title={title}
        onNextSong={nextSongHandler}
        onPrevSong={prevSongHandler}
      />
    </div>
  );
}

export default AudioInterface;
