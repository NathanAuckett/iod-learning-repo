//const calculateLib = require("calculator-lib");

const calculator = require("../libraries/calculator.js");
const myCalc = new calculator();

function calculate(req, res){
    const expression = req.query.exp;
    console.log(expression);
    
    //const result = calculateLib.evaluateInfix(expression);
    const result = myCalc.calculate(req, res);
    
    res.status(200);
    res.json({result: result});
}

function add(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    res.status(200);
    //should use the library/model for these calculations, same for -,*,/
    res.json({result: myCalc.add(num1,num2)});
}

function subtract(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    res.status(200);
    res.json({result: num1 - num2});
}

function multiply(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    res.status(200);
    res.json({result: num1 * num2});
}

function divide(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    res.status(200);
    res.json({result: num1 / num2});
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculate
}