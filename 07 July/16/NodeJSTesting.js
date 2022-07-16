let add = (a, b) => {
    return a + b;
}
let subtract = (a, b) => {
    return a - b;
}
let multiply = (a, b) => {
    return a * b;
}
let divide = (a, b) => {
    return a / b;
}

let greet = (name) => {
    return "Hello " + name;
}

console.log(`Add 5 - 3: ${add(5, 3)}`);
console.log(`Subtract 5 - 3: ${subtract(5, 3)}`);
console.log(`Multiply 5 - 3: ${multiply(5, 3)}`);
console.log(`Divide 5 - 3: ${divide(5, 3)}`);

console.log(greet("Nathan"));
