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
        
        const result = calculateLib.evaluateInfix(expression);

        log.log(this.constructor.name, this.id, result);

        return result;
    }
}

module.exports = Calculator;
