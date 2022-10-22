const nums = "0123456789";
const inputElement = document.getElementById("input");

function inputButtonPress(element){
    inputElement.value += element.innerHTML;
    inputElement.focus();
}

function clearInput(){
    inputElement.value = "";
    inputElement.focus();
}

async function calculate(){
    const inputElement = document.getElementById("input");
    const input = inputElement.value;
    let op = "";
    for (let c of input){ 
        if (!nums.includes(c)){
            op = c;
            break;
        }
    }
    if (op === ""){
        alert("No valid operand detected! Enter one of the 4 main operands to perform maths.");
        inputElement.focus();
        return;
    }
    const values = input.split(op);
    let result = "wat?";

    response = await fetch(`http://localhost:3000/calculator/calculate?exp=${encodeURIComponent(input)}`);
    json = await response.json();
    result = json.result;


    // let response = -1;
    // let json = -1;
    // switch (op){
    //     case "+": 
    //         response = await fetch(`http://localhost:3000/calculator/add?num1=${parseFloat(values[0])}&num2=${parseFloat(values[1])}`);
    //         json = await response.json();
    //         result = json.result;
    //         break;
    //     case "-": 
    //         response = await fetch(`http://localhost:3000/calculator/subtract?num1=${parseFloat(values[0])}&num2=${parseFloat(values[1])}`);
    //         json = await response.json();
    //         result = json.result;
    //         break;
    //     case "*": 
    //         response = await fetch(`http://localhost:3000/calculator/multiply?num1=${parseFloat(values[0])}&num2=${parseFloat(values[1])}`);
    //         json = await response.json();
    //         result = json.result;
    //         break;
    //     case "/": 
    //         response = await fetch(`http://localhost:3000/calculator/divide?num1=${parseFloat(values[0])}&num2=${parseFloat(values[1])}`);
    //         json = await response.json();
    //         result = json.result;
    //         break;
    //     case "%": result = parseFloat(values[0]) % parseFloat(values[1]); break;
    // }

    inputElement.value = result;
    inputElement.focus();
}


//Add keyboard event listeners for basic control
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 27) { //Escape
        clearInput();
    }
    else if(event.keyCode == 13) { //Enter
        calculate();
    }
});