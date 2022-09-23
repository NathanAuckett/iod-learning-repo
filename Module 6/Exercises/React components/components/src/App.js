import logo from './logo.svg';
import './App.css';

import Description from './components/Description';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title appTitle="Meme"/>
      <Description/>
    </div>
  );
}

export default App;
