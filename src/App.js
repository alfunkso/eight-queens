import React from 'react';
import Chessboard from './Chessboard'
import './App.css';

const debug = require('debug')('alfunkso.net:App');

function App() {
  debug("Rendering...");
  return (
      <div className="App">
          <header className="AppHeader">
              The 8 Queens Puzzle
          </header>
          <div className="BoardContainer">
              <Chessboard />
          </div>
      </div>
  );
}

App.propTypes = {};

export default App;
