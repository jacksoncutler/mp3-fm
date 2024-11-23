import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { getSongURL } from '../util/firebase';

function Player(props) {  
  const [songURL, setSongURL] = useState('');

  useEffect(() => {
    getSongURL(props.filename)
      .then((url) => {
        setSongURL(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.filename]);

  return (
    <>
      <ReactAudioPlayer controls src={songURL} title={props.title} />
    </>
  );
}

export default Player;
