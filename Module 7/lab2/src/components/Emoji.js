import {useContext} from "react";

import {EmojiContext} from "../App"

//react components are capitalised by convention
function Emoji(){
    const {emoji, setEmoji} = useContext(EmojiContext);
    
    function changeEmote(){
        switch (emoji){
            case "😞": setEmoji("🙂"); break;
            case "🙂": setEmoji("😞"); break;
            default: setEmoji("❓"); //emoji is a const and part of state, so we don't change it directly but use the setEmoji func instead
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