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

console.log(`Add 5 & 3: ${add(5, 3)}`);
console.log(`Subtract 5 & 3: ${subtract(5, 3)}`);
console.log(`Multiply 5 & 3: ${multiply(5, 3)}`);
console.log(`Divide 5 & 3: ${divide(5, 3)}`);

console.log(greet("Nathan"));



console.log("\n\n\n");



let str = "";
const hellYeah = ["banana", "bread", "at", "work", "today", "dude"]
for (let i = 0; i < hellYeah.length; i ++){
    str += hellYeah[i] + " ";
}
console.log(str);

str = "";
hellYeah[1] = "loaf";
hellYeah[4] = "yesterday";
for (let i = 0; i < hellYeah.length; i ++){
    str += hellYeah[i] + " ";
}
console.log(str);



console.log("\n\n\n");




let accounts = [[2,8,7],[7,1,3],[1,9,5]];

let highest = 0;
for (let i of accounts){
    let total = 0;
    let accounts = i.length;
    
    for (let index = 0; index < accounts; index ++){
        total += i[index];
    }
    
    highest = total > highest? total : highest;
}

console.log(highest);
