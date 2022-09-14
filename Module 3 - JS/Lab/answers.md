# Fundamentals


## 2
1. ` "" - 1 + 0 `
    - Prediction: "10"
2. ` "" + 1 + 0 `
    - Prediction: -1
3. ` true + false `
    - Prediction: 1
4. ` 6 / "3" `
    - Prediction: 2
5. ` "2" * "3" `
    - Prediction: 6
6. ` 4 + 5 + "px" `
    - Prediction: "9px"
7. ` "$" + 4 + 5 `
    - Prediction: "$45"
8. ` "4" - 2 `
    - Prediction: 2
9. ` "4px" - 2 `
    - Prediction: "2px"
    - Actual result: NaN
10. ` " -9 " + 5 `
    - Prediction: " -9 5"
11. ` " -9 " - 5 `
    - Prediction: -14
12. ` null + 1 `
    - Prediction: 1
13. ` undefined + 1 ` - 1
    - Prediction: 1
    - Actual result: NaN
14. ` " \t \n" - 2 `
    - Prediction: -2


## 3
Why:

Prompt returns a string, so when adding the variable a and b together you concatonate the two strings. They need to be converted to number first
```
let a = prompt("First number?", 1);
a = parseFloat(a);
let b = prompt("Second number?", 2);
b = parseFloat(b);

alert(a + b);
```


## 4

1. ` 5 > 4 `
    - Prediction: true
2. ` "apple" > "pineapple" `
    - Prediction: false
3. ` "2" > "12" `
    - Prediction: false
    - Actual result: true
4. ` undefined == null `
    - Prediction: true
5. ` undefined === null `
    - Prediction: false
6. ` null == "\n0\n" `
    - Prediction: false
7. ` null === +"\n0\n" `
    - Prediction: false


## 5
Yes.


## 6
```
let result = a + b < 4 ? 'Below' : 'Over';
```

## 7

```
const delay = (func, ms) => setTimeout(func, ms);
```

## 8
```
const isEmpty = (obj) => Object.keys(obj).length == 0;
```

## 9
```
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        console.log( this.step );
    }
};
```

## 10
```
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value += parseFloat(prompt("Enter value to add: ", 0));
    }
}
```

# Intermediate

## 1 
```
ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
```

## 2
```
truncate = (str, maxLength) => {
    if (str.length > maxLength){
        str = str.slice(0, maxLength - 3);
        str += "...";
    }
    return str;
}
```

## 3
```
//1
styles = ["Jazz", "Blues"];

//2
styles.push("Rock-n-Roll");

//3
const middle = (array) => {
    return Math.floor(array.length / 2);
}
styles[middle(styles)] = "Classics";

//4
let res = styles.shift();
console.log(res);

//5
styles.unshift("Rap", "Reggae");

console.log(styles);
```

## 4
```
ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

const camelize = (str) => {
    str = str.toLowerCase(); //Make lowercase first to ensure there are no missplaced captials
    let strArray = str.split("-"); //split on "-"
    let finalStr = strArray[0]; //add first element to final str

    //Loop remaining elements, make first letter uppercase and add to final string.
    for (let i = 1; i < strArray.length; i++){
        strArray[i] = ucFirst(strArray[i]);
        finalStr += strArray[i];
    }
    return finalStr;
}
```

## 5
```
function Calculator() {
    this.operators = new Map();
    this.operators.set("+", (a, b) => {return parseFloat(a) + parseFloat(b)});
    this.operators.set("-", (a, b) => {return parseFloat(a) - parseFloat(b)});
    
    this.calculate = function(str) {
        let data = str.split(" ");

        for (const key of this.operators){
            if (key[0] == data[1]){
                let f = this.operators.get(key[0]);
                return f(data[0], data[2]);
            }

        }
    }

    this.addMethod = function(operator, func){
        this.operators.set(operator, func);
    }
}


let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("10 * 10"));
```

## 6
```
let arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(array){
    const s = new Set();
    array.forEach(i => {s.add(i)});
    return Array.from(s);
}
```

## 7
map.keys returns an interator object. Push only works on arrays.
You can use Array.from to create an array from map.keys and then push.
```
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
```

## 8
Cannot think of approach in order to track which messages are added and removed from dataset in order to synchronise two data structs.

## 9
```
function sumSalaries(){
    let salArray = Object.values(salaries);
    let total = 0;
    for (sal of salArray){
        total += sal;
    }

    return total
}
```

## 10
```
function topSalaries(){
    let salArray = Object.values(salaries);
        if (salArray.length == 0) {return null} //Bail early if empty
    let salKeysArray = Object.keys(salaries);
    let highestIndex = 0;
    let highestSal = 0;

    let salariesNum = salArray.length;
    for (let i = 0; i < salariesNum; i++){
        if (salArray[i] > highestSal){
            highestIndex = i;
            highestSal = salArray[i];
        }
    }

    return salKeysArray[highestIndex];
}
```

## 11
```
function getSecondsToday(date){
    return date.getHours() * 36000 + date.getMinutes() * 60 + date.getSeconds();
}
```

## 12
```
let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value === meetup){
        return undefined
    }
    return value;
}));
```

# Advanced

## 1
The counters are independant
The values are 0,1.

## 2
```
function makeCounter() {
    let count = 0;
    
    function counter() {
        return count ++;
    }

    counter.set = function (n){
        count = n;
    }
    counter.decrease = function(){
        return count --;
    }

    return counter;
}
```

## 3
```
function printNumbersTimeout(from, to){
    let count = from;
    let t = () => {
        console.log(count);
        setTimeout(() => {
            count ++;
            if (count <= to){
                t();
            }
        }, 1000);
    };
    t();
}

function printNumbersInterval(from, to){
    let count = from;
    let t = setInterval(() => {
        console.log(count);
        count ++;
        if (count > to){
            clearInterval(t);
        }
    }, 1000);
}
```

## 4
```
import _ from 'lodash';

let f = _.debounce(console.log, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);
```

## 5
```
function askPassword(ok, fail) {
    let password = prompt("Password?", '');

    if (password == "rockstar") ok();
        else fail();
}

let user = {
    name: 'John',
    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
```

## 6
```
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;
```

## 7
Yes you can do it like that but it seems like a bad idea.

I had to look this up because the question was a bit weird to start with.
Basically if someone changes the objects prototype, then you also unbind constructor and the call will fail.

This works:
```
function Obj(n) {
    this.name = n;
}

let obj1 = new Obj("bucky");
let obj2 = new obj1.constructor("john");
```
This fails:
```
function Obj(n) {
    this.name = n;
}
Obj.prototype = {}; //---------------------< this is the beaking point

let obj1 = new Obj("bucky");
let obj2 = new obj1.constructor("john");
```

## 8
```
Function.prototype.defer = function(time) {
    let f = this;
    return (...args) => {
        setTimeout(() => f.apply(null, args), time);
    }
}
```

## 9
```
let dictionary = Object.create(null);
// your code to add dictionary.toString method
Object.defineProperty(dictionary, "toString", {
    value: () => Object.keys(dictionary)
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
}
// your toString in action

console.log(dictionary.toString()); // "apple,__proto__"
```

## 10
```
import {Clock} from "./clock.js";

class clockExtended extends Clock {
    constructor(template, precision = 1000) {
        super(template)
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

const clock = new clockExtended("h:m:s", 500);
clock.start();
```

## 11
```
class FormatError extends SyntaxError {
    constructor(name, message, stack) {
        super(name, message, stack);
    }
}
```

## 12
```
function delay(t){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), t);
    });
}
```

## 13
```
async function loadJson() {
    const f = fetch("https://swapi.dev/api/people/1/");
    const response = await f;
    
    if (response.status == 200) {
        let j = response.json();
        let json = await j;
        console.log(json);
        return json;
    } else {
        throw new Error(result.status);
    }
}
```
