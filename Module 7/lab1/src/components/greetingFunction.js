import {useState} from "react";


export default function GreetingFunction(props){
    const [name, setName] = useState("World");
    
    function handleChange(name){
        setName(name);
    }

    return (
        <div>
            <button onClick={() => {handleChange("Nathan")}}>Greet Function</button>
            <h1>Hello {name}</h1>
        </div>
    )
}