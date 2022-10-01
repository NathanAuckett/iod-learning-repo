/*
Data is returned as JSON.

array[0] = array of headers
array[1] = array of objects containing key value pairs, where each key is a header from array [0]. Every object contains every key, although some may contain empty string values.

*/

let firstTimeSetupComplete = false;
const baseURL = "http://127.0.0.1:3000";
let jsonData;
let accounts = [];
accountCurrent = "";

function createTable(){
    const table = document.getElementById("data");
    table.innerHTML = "";
    //Create Table head
    let tableHead = document.createElement('thead');
    let rowElement = document.createElement("tr");
    for (let i of jsonData[0]){
        let ele = document.createElement("th");
        ele.innerHTML = i;

        rowElement.append(ele);
        tableHead.append(rowElement);
    }

    //Create Table Body
    let tableBody = document.createElement('tbody');
    let colLength = jsonData[0].length;
    for (let col of jsonData[1]){
        rowElement = document.createElement("tr");
        
        for (let i = 0; i < colLength; i ++){
            let value = col[jsonData[0][i]];

            ele = document.createElement("td");
            ele.innerHTML = value;

            rowElement.append(ele);
            tableBody.append(rowElement);
        }
    }

    table.append(tableHead);
    table.append(tableBody);
}


async function getAllData(url){
    
    const account = document.getElementById("account").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    
    const data = await fetch(url+`?account=${account}&month=${month}&day=${day}`);
    jsonData = await data.json();

    console.log("Data collected");
    console.log(jsonData);
    
    firstTimeSetup();
    createTable();
    renderChart();
}

function firstTimeSetup(){
    if (!firstTimeSetupComplete){
        firstTimeSetupComplete = true;
        getAccountNumbersFromData();
    }
}


function getAccountNumbersFromData(){
    for (let col of jsonData[1]){
        let accNum = col["Account Number"];
        if (!accounts.includes(accNum)){
            accounts.push(accNum);
        }
    }

    for (a of accounts){
        let selector = document.getElementById("account");
        let op = document.createElement(`option`);
        op.innerHTML = a;
        op.value = a;
        selector.append(op);
    }

    accountCurrent = accounts[0];
}


//Takes a date and sperator character, like /, and reverses the date. So dd:mm:yyyy becomes yyyy:mm:dd
function goodDateToBad(dateStr, seperator){
    let dateArray = dateStr.split(seperator);
    return dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
}


function chartData(){
    let result = [];
    for (let col of jsonData[1]){
        let obj = {};
        obj["x"] = new Date(goodDateToBad(col["Transaction Date"], "/"));
        obj["y"] = col["Balance"];

        result.push(obj);
    }
    console.log(result);
    return result;
}

let chart;
function renderChart(){
    if (chart){
        chart.destroy();
    }
    
    const config = {
        type: 'line',
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }
            }
        },
        data: {
            labels: [],
            datasets: [{
                label: 'Balance',
                data: chartData(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    }
    chart = new Chart(document.getElementById('myChart'), config);
}


// //Fill out Month select
// for (let i = 1; i < 13; i ++){
//     let selector = document.getElementById("month");
//     let op = document.createElement(`option`);
//     op.innerHTML = i;
//     op.value = i;
//     selector.append(op);
// }

//Fill out Day select
for (let i = 1; i < 32; i ++){
    let selector = document.getElementById("day");
    let op = document.createElement(`option`);
    op.innerHTML = i;
    op.value = i;
    selector.append(op);
}


getAllData(baseURL);