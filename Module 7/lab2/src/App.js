import { createContext, useState } from 'react';
import './App.css';

import Emoji from "./components/Emoji";
import Clock from "./components/clock";

export const EmojiContext = createContext();

function App() {
  const [emoji, setEmoji] = useState("🙂");
  
  return (
    <div className="App">
    
    <EmojiContext.Provider value={{emoji, setEmoji}}>
      <Emoji/>
      <Clock/> {/* just copied your clock from lab1 and made it use context as well, so the emoji is displayed in multiple components */}
    </EmojiContext.Provider>

    {emoji}

    </div>
  );
}

export default App;
