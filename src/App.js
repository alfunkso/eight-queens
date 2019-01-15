import React from 'react';
import './App.css';

const debug = require('debug')('alfunkso.net:App');

function App() {
  debug("Rendering...");
  return (
      <div className="App">
          <header className="App-header">
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
          </header>
      </div>
  );
}

App.propTypes = {};

export default App;
