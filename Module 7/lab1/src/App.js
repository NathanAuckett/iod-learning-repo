import logo from './logo.svg';
import './App.css';

import GreetingClass from "./components/greetingClass";
import GreetingFunction from "./components/greetingFunction";
import Clock from "./components/clock";
import { useState } from 'react';

function App() {
  const [showClock, setShowClock] = useState(true);
  
  function toggleClock(){
    setShowClock(!showClock);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GreetingClass/>

        <GreetingFunction/>

        <button onClick={toggleClock}>Toggle Clock</button>
        {showClock ? <Clock/> : null}

      </header>
    </div>
  );
}

export default App;
