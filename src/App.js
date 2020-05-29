import React from 'react';
import logo from './logo.svg';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './fonts.css'


import Hola from './components/Hola';
import RecentPosts from './components/RecentPosts'



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
      <RecentPosts></RecentPosts>
    </div>
  );
}

export default App;
