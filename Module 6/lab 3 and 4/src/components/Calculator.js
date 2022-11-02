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
        catch (e) { setResult(e.toString()) } //just so they have some idea what went wrong
    }

    return (
        <div style={{margin: "1rem"}}>
            <label htmlFor="input">Enter equation: </label>
            <div><input id="input" type="text" onChange={handleChange}></input></div>
            {/* you could also shortcut this and just do onChange={(e) => setInput(e.target.value)} */}
            
            <button onClick={calculate}>Calculate</button>

            <p>Result: {result}</p>
        </div>
    )
}