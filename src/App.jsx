import { initFirebase } from './util/firebase';
import AudioInterface from './components/AudioInterface';
import './App.css';

function App() {
  initFirebase();
  return (
    <>
      <AudioInterface />
    </>
  );
}

export default App;
