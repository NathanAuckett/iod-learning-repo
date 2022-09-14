
const dogJson = `{
    "dogBreeds": [{
        "breed": "Labrador Retriever",
        "breedType": "Purebred",
        "origin": "Canada,USA",
        "popularity": "1",
        "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
        "hypoallergenic": "No",
        "intelligence": 7,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "German Shepard",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "2",
        "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
        "hypoallergenic": "No",
        "intelligence": 3,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "Golden Retriever",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "3",
        "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 4,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "French Bulldog",
        "breedType": "Purebred",
        "origin": "France, UK",
        "popularity": "4",
        "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
        "hypoallergenic": "No",
        "intelligence": 58,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Bulldog",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "5",
        "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
        "hypoallergenic": "No",
        "intelligence": 77,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Beagle",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "6",
        "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
        "hypoallergenic": "No",
        "intelligence": 72,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Poodle",
        "breedType": "Purebred",
        "origin": "Germany, France",
        "popularity": "7",
        "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
        "hypoallergenic": "Yes",
        "intelligence": 2,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Rottweiler",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "8",
        "temperament": ["Intelligent", "Corageous", "Fearless", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "German Shorthaired Pointer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "9",
        "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Yorkshire Terrier",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "10",
        "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
        "hypoallergenic": "Yes",
        "intelligence": 27,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Boxer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "11",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "No",
        "intelligence": 48,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }]
}`;

let dogs = JSON.parse(dogJson);
dogs = dogs.dogBreeds;

//Create name value pairs for dogs with breed being the name and the array index being the value.
//This allows us to lookup the dog by name.
let breeds = {};
for (let i in dogs){
    let dog = dogs[i];
    let breed = dog.breed;
    breeds[breed] = dog;
    document.getElementById("dog1Select").options.add(new Option(breed, breed));
    document.getElementById("dog2Select").options.add(new Option(breed, breed));
}

function updateComparison(){
    let compare = document.getElementById("compare").value.toLowerCase();
    let result = document.getElementById("result");
    let dog1 = document.getElementById("dog1Select").value;
    let dog2 = document.getElementById("dog2Select").value;

    if (dog1 == dog2){
        result.innerHTML = "Those dogs are the same! Select two different dogs to compare.";
    }
    else{
        dog1 = breeds[dog1];
        dog2 = breeds[dog2];
        let val1 = dog1[compare];
        let val2 = dog2[compare];

        let resultStr = `A ${dog1["breed"]}'s ${compare} is `;
        
        if (val1 > val2){
            resultStr += "greater than ";
        }
        else if (val1 == val2){
            resultStr += "the same as ";
        }
        else{
            resultStr += "lower than ";
        }
        
        resultStr += `a ${dog2["breed"]}'s.`;

        result.innerHTML = resultStr;
    }
}

//the HTML inserted for each dog displayed in the sort results.
function dogSortBoxHTML(breed, img, sortTitle, sortValue){
    return `
        <h2>${breed}</h2>
        <img src="${img}" width="400rem">
        <p>${sortTitle}: ${sortValue}</p>
    `
}

//the sort function used within sortAndShowAll
function sortDogs(_sort){
    dogs.sort((a, b) => {
        if (a[_sort] == b[_sort]){
            return a.breed.localeCompare(b.breed);
        }
        return b[_sort] - a[_sort];
    });
}

function sortAndShowAll(){
    let sort = document.getElementById("sortVar").value;
    sortDogs(sort.toLowerCase());

    let dogContainer = document.getElementById("showAllContainer");
    dogContainer.innerHTML = "";

    for (let i in dogs){
        let dog = dogs[i];
        
        const dogDiv = document.createElement("div");
        dogContainer.appendChild(dogDiv);
        dogDiv.className = "col border border-5 rounded-5";
        dogDiv.innerHTML = dogSortBoxHTML(dog.breed, dog.photo, sort, dog[sort.toLowerCase()]);
    }
}

sortAndShowAll();
