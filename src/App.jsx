import { initFirebase } from './util/firebase';
import AudioInterface from './components/AudioInterface';
import './App.css';

function App() {
  initFirebase();
  return (
    <main>
      <AudioInterface />
    </main>
  );
}

export default App;
