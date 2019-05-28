import React from 'react';
import './App.css';
import Navibar from './Navibar/Navibar.js';
import Jumbo from './Jumbo/Jumbo.js';
import Kartice from './Kartice/Kartice.js';


function App() {
  return (
    <div className="App">
      <Navibar />
      <Jumbo />
      <Kartice />
    </div>
  );
}

export default App;
