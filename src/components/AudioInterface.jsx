import { useState, useEffect } from 'react';
import { getSongData } from '../util/firebase';
import Player from './Player';

function AudioInterface(props) {
  const [currentSong, setCurrentSong] = useState({});

  useEffect(() => {
    getSongData()
      .then((song) => {
        setCurrentSong(song);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let title;
  if (currentSong.artist && currentSong.name) {
    title = `${currentSong.artist} - ${currentSong.name}`
  };

  return (
    <div className='container'>
      <Player filename={currentSong.filename} title={title} />
    </div>
  );
}

export default AudioInterface;
