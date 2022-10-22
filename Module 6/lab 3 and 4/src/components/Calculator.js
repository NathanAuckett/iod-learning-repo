import { useState } from "react"

const calculateLib = require("calculator-lib");


export default function Calculator(){
    const [input, setInput] = useState("")
    function handleChange(event){
        setInput(event.target.value);
    }

    const [result, setResult] = useState("");
    function calculate(){
        try {
            setResult(calculateLib.evaluateInfix(input));
        }
        catch{}
    }

    return (
        <div style={{margin: "1rem"}}>
            <label for="input">Enter equation: </label>
            <div><input id="input" type="text" onChange={handleChange}></input></div>
            
            <button onClick={calculate}>Calculate</button>

            <p>Result: {result}</p>
        </div>
    )
}