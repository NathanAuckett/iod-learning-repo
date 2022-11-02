//react components are capitalised by convention
function Emoji(props){
    const type = props.type;

    switch (type){
        case "happy": return <span>🙂</span>
        case "sad": return <span>😢</span>
        default: return <p>❓</p>
    }

    
}

export default Emoji;