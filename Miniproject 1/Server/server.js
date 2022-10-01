import express from 'express';
import cors from 'cors'
import { parse } from '@vanillaes/csv'
import {readFileSync} from 'fs'

const app = express();
app.use(cors());
const port = 3000

//Read CSV file into memory
console.log("Loading source file...");

let sourceFile = `D:\\Dropbox\\Projects\\Financialinator\\All Account Transactions_01-01-22 - 12-08-22.csv`;

const csvData = readFileSync(sourceFile);

console.log(`Source data loaded. String length: ${csvData.length}`);

const csvDataArray = parse(csvData); //Parses csv string into 2D array representing grid like structure. First row is headers, following rows are data.

// Fields included in CSV to leave out of data.
const throwAwayFields = ["BSB Number", "Cheque Number", "Transaction Type"];

//Convert resulting 2D array of CSV data to JSON, array of objects with key value pairs
let jsonData = [];

// Extract headings from data. Leavig in throw aways to keep arrays parallel for data extraction
let props = [];
for (let i of csvDataArray[0]){
	props.push(i);
}

let dataLength = csvDataArray.length;
let propsLength = props.length;
let dataArray = [];
for (let row = 1; row < dataLength - 1; row ++){ //Loop each row starting at 1 as first row is headings.
	let obj = {};
	for (let col = 0; col < propsLength; col ++){ //Loop column and insert key value pairs based on heading title and column value.
		let prop = props[col];
		if (!throwAwayFields.includes(prop)){
			obj[prop] = csvDataArray[row][col];
		}
	}
	dataArray.push(obj); //Add object to array.
}

//Remove throw away fields from props now that parrelel reading is no longer an issue
props = props.filter((i) => !throwAwayFields.includes(i));
console.log(props);

jsonData.push(props); //Push headings into JSON
jsonData.push(dataArray); //Push data into JSON


//Takes a date(dd:mm:yy) and sperator character, like /, and converts it to mm:dd:yy
function goodDateToBad(dateStr, seperator){
	let dateArray = dateStr.split(seperator);
	return dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
}

function filterToMonth(srcData, monthNum, dateKeyName){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		let eleDate = new Date(goodDateToBad(element[dateKeyName], "/"));
		if (eleDate.getMonth() === monthNum){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}

function filterToDay(srcData, dayNum, dateKeyName){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		let eleDate = new Date(goodDateToBad(element[dateKeyName], "/"));
		if (eleDate.getDate() === dayNum){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}

function filterToAccount(srcData, accountNum, accountKeyName){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		if (element[accountKeyName] === accountNum){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}


// Server responses
app.get('/', (req, res) => { //Return all data
	let returnData = jsonData;

	let month = req.query.month;
	let day = req.query.day;
	let account = req.query.account;
	
	if (account){
		returnData = filterToAccount(returnData, account, "Account Number");
	}

	if (month){
		returnData = filterToMonth(returnData, parseInt(month), "Transaction Date");
		if (day){
			returnData = filterToDay(returnData, parseInt(day), "Transaction Date");
		}
	}


	res.json(returnData);
});

// Run server
app.listen(port, () => {
	console.log(`CSV data server listening on port ${port}`);
});

