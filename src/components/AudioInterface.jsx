import { useState, useEffect } from 'react';
import { getSongData, getSongURL } from '../util/firebase';
import Player from './Player';

function AudioInterface() {
  const [songData, setSongData] = useState({});
  const [songURL, setSongURL] = useState('');

  useEffect(() => {
    getSongData(1)
      .then((song) => {
        setSongData(song);
        getSongURL(song.filename)
          .then((url) => {
            setSongURL(url);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let title;
  if (songData.artist && songData.name) {
    title = `${songData.artist} - ${songData.name}`;
  }

  return (
    <div className='container'>
      <Player src={songURL} title={title} />
    </div>
  );
}

export default AudioInterface;
