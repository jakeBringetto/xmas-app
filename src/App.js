import spoon from './spoons.jpeg';
import card from './card.jpeg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <p className="xmas">
        Merry Christmas!
      </p>
      <header className="App-header">
        <img src= {spoon} className="App-logo" alt="logo" />
        <p className="spoon">
          Wooden Spoon
        </p>
        <img src= {card} className="card"/>
        <button className= "my-button" onClick={() => alert('I have a gift card to forward via email. God Jul!')}>Press Me</button>
      </header>
      <p>app by Jake Bringetto</p>
    </div>
  );
}

export default App;
