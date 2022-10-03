/*
Data is returned as JSON.

array[0] = array of headers
array[1] = array of objects containing key value pairs, where each key is a header from array [0]. Every object contains every key, although some may contain empty string values.
*/

import * as BANK_FORMATS from "./Server/bankFormats.js";
const BANK = BANK_FORMATS.BANKWEST;

let firstTimeSetupComplete = false;
const baseURL = "http://127.0.0.1:3000";
let jsonData;
let accounts = [];
let accountCurrent = "";
let chart;

//Populate the table with data
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

            let ele = document.createElement("td");
            ele.innerHTML = value;

            rowElement.append(ele);
            tableBody.append(rowElement);
        }
    }

    table.append(tableHead);
    table.append(tableBody);
}

//Get data, run first time setup, run createTable and renderChart if account is selected
async function getAllData(){
    const account = document.getElementById("account").value;
    const category = document.getElementById("category").value;
    const month = document.getElementById("month").value;
    const week = document.getElementById("week").value;
    
    const data = await fetch(baseURL+`?account=${account}&category=${category}&month=${month}&week=${week}`);
    jsonData = await data.json();

    console.log("Data collected");
    console.log(jsonData);
    
    firstTimeSetup();
    createTable();
    if (accountCurrent){
        document.getElementById("chart").style.display = "";
        renderChart();
    }
    else{
        document.getElementById("chart").style.display = "none";
    }

    const totalContainer = document.getElementById("totalContainer");
    if (document.getElementById("category").value){
        document.getElementById("total").innerHTML = calcTotalSpendingsOfData();
        totalContainer.style.display = "";
    }
    else{
        totalContainer.style.display = "none";
    }
}
window.getAllData = getAllData;

//This function runs once on the first call of getData to extract information and populate fields within the DOM
function firstTimeSetup(){
    if (!firstTimeSetupComplete){
        firstTimeSetupComplete = true;
        getAccountNumbersFromData();
        getCategoriesFromData();
    }
}

//Extracts account numbers from data and populates account dropdown
function getAccountNumbersFromData(){
    for (let col of jsonData[1]){
        let accNum = col[BANK[BANK_FORMATS.ACCOUNT_NUMBER]];
        if (!accounts.includes(accNum)){
            accounts.push(accNum);
        }
    }
    
    let selector = document.getElementById("account");
    for (let a of accounts){
        let op = document.createElement(`option`);
        op.innerHTML = a;
        op.value = a;
        selector.append(op);
    }
}

//Extracts categories from data and populates category dropdown
function getCategoriesFromData(){
    const categories = [];
    for (let col of jsonData[1]){
        let cat = col[BANK_FORMATS.CATEGORY];
        if (!categories.includes(cat)){
            categories.push(cat);
        }
    }
    
    let selector = document.getElementById("category");
    for (let c of categories){
        let op = document.createElement(`option`);
        op.innerHTML = c;
        op.value = c;
        selector.append(op);
    }
}


function calcTotalSpendingsOfData(){
    let rows = jsonData[1].length;
    console.log(`Calculating totals for ${rows} of data.`);
    let total = 0;
    if (rows > 0){
        for (let row of jsonData[1]){
            let debit = row[BANK[BANK_FORMATS.DEBIT]];
            if (debit){
                total += parseFloat(debit);
            }
            let credit = row[BANK[BANK_FORMATS.CREDIT]];
            if (credit){
                total += parseFloat(credit);
            }
        }
    }
    
    return total;
}

//Takes a date and seperator character, like /, and reverses the date. So dd:mm:yyyy becomes yyyy:mm:dd
function goodDateToBad(dateStr, seperator){
    let dateArray = dateStr.split(seperator);
    return dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
}


function balanceData(){
    /*
    This function filters that data in order to only display the latest entry for any specific date.
    This prevents multiple entry points per day on the graph and makes the graph more readable as a result
    */
    let fitleredData = [];

    let rows = jsonData[1].length;
    console.log(`Graph data starting rows: ${rows}`);
    if (rows > 0){
        let lastDate = jsonData[1][rows - 1][BANK[BANK_FORMATS.DATE]];
        for (let i = rows - 1; i > -1 ; i --){
            let row = jsonData[1][i];
            let thisDate = row[BANK[BANK_FORMATS.DATE]];
            if (thisDate != lastDate){
                let obj = {};
                obj["x"] = new Date(goodDateToBad(lastDate, "/"));
                
                let prevRow = i == rows - 1 ? row : jsonData[1][i + 1];
                obj["y"] = prevRow[BANK[BANK_FORMATS.BALANCE]];

                fitleredData.push(obj);
            }
            lastDate = thisDate;
        }

        let obj = {};
        obj["x"] = new Date(goodDateToBad(jsonData[1][0][BANK[BANK_FORMATS.DATE]], "/"));
        obj["y"] = jsonData[1][0][BANK[BANK_FORMATS.BALANCE]];

        fitleredData.push(obj);
    }
    console.log(`Graph data ending rows: ${fitleredData.length}`);
    return fitleredData;
}

function spendingsData(){
    /*
    This function filters that data in order to only display the latest entry for any specific date.
    This prevents multiple entry points per day on the graph and makes the graph more readable as a result.
    */
    let fitleredData = [];

    let rows = jsonData[1].length;
    console.log(`Graph data starting rows: ${rows}`);
    if (rows > 0){
        let lastDate = jsonData[1][rows - 1][BANK[BANK_FORMATS.DATE]];
        let totalSpent = 0;
        for (let i = rows - 1; i > -1 ; i --){
            let row = jsonData[1][i];
            let spent = 0;

            let debit = row[BANK[BANK_FORMATS.DEBIT]];
            if (debit){
                spent += parseFloat(debit);
            }
            let credit = row[BANK[BANK_FORMATS.CREDIT]];
            if (credit){
                spent += parseFloat(credit);
            }

            let thisDate = row[BANK[BANK_FORMATS.DATE]];
            if (thisDate != lastDate){
                let obj = {};
                obj["x"] = new Date(goodDateToBad(lastDate, "/"));
                obj["y"] = totalSpent;

                fitleredData.push(obj);
                totalSpent = 0;
            }
            totalSpent += spent;
            lastDate = thisDate;
        }

        let obj = {};
        obj["x"] = new Date(goodDateToBad(jsonData[1][0][BANK[BANK_FORMATS.DATE]], "/"));
        obj["y"] = totalSpent;
        
        fitleredData.push(obj);
    }
    console.log(`Graph data ending rows: ${fitleredData.length}`);

    console.log(fitleredData);

    return fitleredData;
}

function renderChart(){
    if (chart){
        chart.destroy();
        chart = -1;
    }
    
    const data = {
        datasets: [{
            label: 'Balance /day',
            data: balanceData(),
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
            borderWidth: 3
        }]
    }

    const config = {
        type: 'line',
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: "day"
                    }
                }
            }
        },
        data: data
    }

    //If category is set, change the graph tpo bar graph and use spendings data instead of balance
    let category = document.getElementById("category").value;
    if (category){
        data.datasets[0].label = "Total transaction /day";
        data.datasets[0].data = spendingsData();
        config.type = "bar";
        config.data = data;
    }
    
    chart = new Chart(document.getElementById('chart'), config);
}

function accountChange(){
    accountCurrent = document.getElementById("account").value;
    getAllData(baseURL);
}
window.accountChange = accountChange;

getAllData(baseURL);