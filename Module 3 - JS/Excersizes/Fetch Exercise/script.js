/*
Exercises
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

Exercise 1:
Read the countries API using fetch and print the name of country, capital, languages, population and area.

Exercise 2:
Print out all the cat names in to catNames variable.

Excercise 3: 
Read the cats api and find the average weight of cat in metric unit.
Read the countries api and find out the 10 largest countries
Read the countries api and count total number of languages in the world used as officials.
*/

function L(s){
    console.log(s);
}

let countriesData;
function countries (){
    //L(countriesData);
    // for (let c of countriesData){
    //     L(c.languages);
    // }


    function findCountryByName(name){
        for (let c of countriesData){
            if (c.name.toLowerCase() == name.toLowerCase()){
                return c;
            }
        }
        return -1;
    }
    //Exercise 1
    L("------------------EX1: ------------------")
    function printCountryBasics(country){
        let languages = "";
        for (l of country.languages) {
            languages += `${l.name}, `;
        }
        L(`
            ${country.name}:
            Capital: ${country.capital}
            Population: ${country.population}
            Area: ${country.area}
            Language: ${languages}
        `);
    }
    let c = findCountryByName("Haiti");
    if (c != -1){
        printCountryBasics(c);
    }
    else{
        L("Country does not exist by that name in dataset.");
    }
    //Exercise 4
    L("------------------EX4: ------------------")
    countriesData.sort((a, b) => {
        return b["area"] - a["area"];
    })
    for (let i = 0; i < 10; i ++) {
        L(`${countriesData[i].name} : ${countriesData[i].area}`);
    }
}

let catsData;
function cats (){
    //L(catsData);

    //Exercise 2
    L("------------------EX2: ------------------")
    let catNames = [];
    for (cat of catsData){
        catNames.push(cat.name);
    }
    L(catNames);


    //Exercise 3
    L("------------------EX3: ------------------")
    function findCatByName(name){
        for (c of catsData){
            if (c.name.toLowerCase() == name.toLowerCase()){
                return c;
            }
        }
    }
    function averageWeightOfCat(cat){
        return cat.weight["metric"];
    }
    L(averageWeightOfCat(findCatByName("Toyger")));
}


fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {countriesData = data; countries()});


fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {catsData = data; cats()});