import { initFirebase } from './util/firebase';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  initFirebase();
  return (
    <>
      <div className='container'>
        <AudioPlayer />
      </div>
    </>
  );
}

export default App;
