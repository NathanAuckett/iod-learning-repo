const calculateLib = require("calculator-lib");

const logger = require("./log.js");

const log = new logger();

class Calculator {
    constructor() {
        this.id = Math.random() * 999999;
    }

    // #log(value){
    //     console.log(`[Calculator: ${this.id}]: ${value}`);
    // };
  
    calculate(req, res){
        const expression = req.query.exp;
        
        const result = calculateLib.evaluateInfix(expression); //definitely looks like a better option than eval

        log.log(this.constructor.name, this.id, result);

        return result;
    }

    //for the purposes of the exercise, should ideally have individual functions like this too, and for -,*,/
    add(num1, num2) {
        let result = num1+num2;
        log.log(this.constructor.name, this.id, result);
        return result;
    }
}

module.exports = Calculator;
