import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function Greeting(props){
  return (
    <h1>Hello {props.name}</h1>
  );
}

function App() {
  let [name, setName] = useState("world");

  const greet = (name) => {
    setName(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

      <button onClick={()=>greet("Nathan")}>Greeting</button>
      
      <Greeting name={name}/>
      
    </div>
  );
}

export default App;
