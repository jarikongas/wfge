import React from 'react';
import logo from './logo.svg';
import './App.css';
import Helloworld from './components/Helloworld';
import Chargerlist from './components/Chargerlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Helloworld />
        </p>
        <p>
          <Chargerlist />
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

export default App;
