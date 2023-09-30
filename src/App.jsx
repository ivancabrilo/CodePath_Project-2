
import React from 'react';
import FlashcardContainer from './FlashcardContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Guess European capitals</h1>
        <div id="subtitle"><h2>How well do you know Europe? Test your geogrpahy knowledge</h2>
        <h3>Number of cards: 42</h3>
        </div>
       </header>
      <div>
      <FlashcardContainer />
      </div>
    </div>
  );
}

export default App;
