
let list = [
    {
      firstName: "Kiran1",
      lastName: "Kumar",
      salary: 25000,
    },
    {
      firstName: "Mohan1",
      lastName: "Srivastav",
      salary: 20000,
    },
    {
      firstName: "Mary1",
      lastName: "Kom",
      salary: 23000,
    },
    {
      firstName: "Kiran2",
      lastName: "Kumar",
      salary: 28000,
    },
    {
      firstName: "Mohan2",
      lastName: "Srivastav",
      salary: 30000,
    },
    {
      firstName: "Mary2",
      lastName: "Kom",
      salary: 43000,
    },
];

function checkExists(){
    let str = document.getElementById("fname").value;

    let resulted = false;
    for (i of list){
        for (key in i){
            let keyValue = i[key];

            if (keyValue.toLowerCase === str.toLowerCase){
                document.getElementById("demo").innerHTML = `${str} exists.`;
                resulted = true;
                break;
            }
        }
        if (resulted){
          break;
        }
    }
    if (!resulted){
      document.getElementById("demo").innerHTML = `${str} does not exist!`;
    }
}


function showAll(){
  let container = document.getElementById("theContainer");
  container.innerHTML="";
  for (i of list){
    let firstName = i["firstName"];
    let lastName = i["lastName"];
    let salary = i["salary"];

    let div = document.createElement("div");
    div.style="margin: 1rem;";
    div.innerHTML = `
      <p style="display: inline;">${firstName} ${lastName} with </p>
      <p style="display: inline;">salary of: ${salary}</p>
    `;
    container.appendChild(div);
  }
}

function deleteHighestSalary(){
  let listLength = list.length;
  let highestSalary = Number.MIN_VALUE;
  let highestSalaryIndex = -1;

  for (let i = 0; i < listLength; i ++){
    let s = list[i]["salary"];
    
    if (s > highestSalary){
      highestSalary = s;
      highestSalaryIndex = i;
    }
  }
  list.splice(highestSalaryIndex, 1);
  console.log(highestSalary);
  console.log(highestSalaryIndex);

  showAll();
}