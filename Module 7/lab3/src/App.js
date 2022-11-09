import './App.css';

import {Link} from "react-router-dom";

import Router from "./Router.js"


function App() {
  return (
    <div className="App">
      <Link to="/home" style={{margin: "10px"}}>Home</Link>
      <Link to="/dashboard" style={{margin: "10px"}}>Dashboard</Link>
      <Link to="/posts" style={{margin: "10px"}}>Posts</Link>

      <Router/>
    </div>
  );
}

export default App;
