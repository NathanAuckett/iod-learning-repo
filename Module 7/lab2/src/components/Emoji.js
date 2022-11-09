import {useContext} from "react";

import {EmojiContext} from "../App"

//react components are capitalised by convention
function Emoji(){
    const {emoji, setEmoji} = useContext(EmojiContext);
    
    function changeEmote(){
        switch (emoji){
            case "😞": setEmoji("🙂"); break;
            case "🙂": setEmoji("😞"); break;
            default: emoji = "❓";
        }
    }

    return (
        <div>
        <button onClick={changeEmote} style={{margin: "1rem"}}>Change</button>

        {emoji}

        </div>
    )
    
}

export default Emoji;