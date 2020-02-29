import React, { useContext } from 'react';
import { useMediaQuery, useWindowResize } from 'beautiful-react-hooks';
import { GlobalContext } from './context/globalState';
import Navbar from './components/Navbar';
import IPhone from './components/iPhone';
import './App.css';

function App() {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log('isDarkMode: ', isDarkMode);

  const { onWindowResize } = useContext(GlobalContext);
  useWindowResize(event => {
    onWindowResize();
  });

  return (
    <div className="App">
      <Navbar />
      <div className="iPhone-container">
        <IPhone />
      </div>
    </div>
  );
}

export default App;
