import { initFirebase } from './util/firebase';
import AudioInterface from './components/AudioInterface';
import './App.css';

function App() {
  initFirebase();
  let theme = 'light';
  return (
    <main data-theme={theme}>
      <AudioInterface />
    </main>
  );
}

export default App;
