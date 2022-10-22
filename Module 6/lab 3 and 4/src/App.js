import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


import Emoji from './components/Emoji.js';
import Calculator from './components/Calculator.js';





function App() {
  
  let [emote, setEmote] = useState("happy");
  
  function changeEmote(){
    if (emote === "happy"){
      setEmote("sad");
    }
    else{
      setEmote("happy");
    }
    console.log(emote);
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

        <button onClick={changeEmote} style={{margin: "1rem"}}>Change</button>
        <Emoji type={emote}/>
        <Calculator/>

      </header>
    </div>
  );
}

export default App;
