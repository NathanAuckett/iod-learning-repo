
function emoji(props){
    const type = props.type;

    switch (type){
        case "happy": return <span>🙂</span>
        case "sad": return <span>😢</span>
        default: return <p>❓</p>
    }

    
}

export default emoji;