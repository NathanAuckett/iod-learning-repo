import logo from './logo.svg';
import './App.css';
import moment from "moment-timezone"

function App() {
  
  const msg = "I'm a string in a variable";
  const e = <div className="testdiv"><p>'{msg}' and this text is just extra text that is not in that variable. Lol wot? crazy stuff!</p></div>
  
  let a = moment.tz("Australia/Sydney").toString();

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
        {e}
        {a}
      </header>
    </div>
  );
}

export default App;
