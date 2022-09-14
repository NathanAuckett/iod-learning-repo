
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//1
console.log("-----Question 1-----");
companies.forEach(company => {
    console.log(company.name);
});

//2
console.log(`\n\n-----Question 2-----`);
companies.forEach(company => {
    if (company.start > 1987){
        console.log(company.name);
    }
});

//3
console.log(`\n\n-----Question 3-----`);
let retailCompanies = [];
companies.forEach(company => {
    if (company.category === "Retail"){
        retailCompanies.push(company);
    }
});

//4
console.log(`\n\n-----Question 4-----`);
retailCompanies.sort((a, b) => {
    return b.end - a.end;
});
console.log(retailCompanies);

//5
console.log(`\n\n-----Question 5-----`);
ages.sort((a, b) => {
    return b - a;
});
console.log(ages);

//6
console.log(`\n\n-----Question 6-----`);
let {name, category} = companies[0];

const obj = {
    name,
    category,
    getName(){
        console.log(name);
    }
};

obj.getName();

//7
console.log(`\n\n-----Question 7-----`);
function numNPrint5000(){
    let sum = 0;
    for (n of arguments){
        sum += n;
    }
    console.log(sum);
}

numNPrint5000(5, 5, 2, 3);


//8
console.log(`\n\n-----Question 8-----`);

// Recursive function to search through nested arrays
function addArray(value, array){
    if (Array.isArray(value)){
        for (i of value){
            addArray(i, array);
        }
    }
    else{
        array.push(value);
    }
}
// This creates a 1D array of the enetered arguments
function arrayify(){
    let array = [];
    for (arg of arguments){
        if (Array.isArray(arg)){
            for (i of arg){
                addArray(i, array);
            }
        }
        else{
            array.push(arg);
        }
    }
    console.log(array);
}
arrayify(5, "nathan", ["beans", "cookies", ["2nd layer", "babyyyyyy", ["3rd layer", ":O", ":P"]]], 9999);


let studentsData = [['Jack', 26], ['Sara', 23], ['Peter', 25], ['Peter', 40]];

let students = studentsData.length;
console.log(students);
let sorted = [];

for (ai = 0; ai < students; ai ++){
    let lowestAge = 999;
    lowestIndex = 0;
    for (var i = 0; i < students; i ++){
        let age = studentsData[i][1];
        if (age < lowestAge){
            lowestAge = age;
            lowestIndex = i;
        }
    }
    sorted.push(studentsData[lowestIndex][1]);
    studentsData.splice(lowestIndex, 1);
    students = studentsData.length;
}

console.log(sorted);