import React from 'react';
import logo from './logo.svg';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Hola from './components/Hola';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='border border-primary'>
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
        <Hola/>
      </header>
    </div>
  );
}

export default App;
