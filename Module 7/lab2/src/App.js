import { createContext, useState } from 'react';
import './App.css';

import Emoji from "./components/Emoji";

export const EmojiContext = createContext();

function App() {
  const [emoji, setEmoji] = useState("🙂");
  
  return (
    <div className="App">
    
    <EmojiContext.Provider value={{emoji, setEmoji}}>
      <Emoji/>
      <Emoji/>
    </EmojiContext.Provider>

    {emoji}

    </div>
  );
}

export default App;
