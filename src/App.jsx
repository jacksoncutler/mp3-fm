import { useState } from 'react';
import { initFirebase } from './util/firebase';
import AudioInterface from './components/AudioInterface';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  initFirebase();
  return (
    <main data-theme={theme}>
      <AudioInterface />
      <button className='testbtn' onClick={toggleTheme}>Theme</button>
    </main>
  );
}

export default App;
