import { useState } from 'react';
import { initFirebase } from './util/firebase';
import PlayerWrapper from './components/PlayerWrapper';
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
      <PlayerWrapper />
      <button className='testbtn' onClick={toggleTheme}>Theme</button>
    </main>
  );
}

export default App;
