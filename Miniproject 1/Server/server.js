import express from 'express';
import cors from 'cors';
import { parse } from '@vanillaes/csv';
import {readFileSync, readdirSync} from 'fs';
import {getCategory} from "./categories.js";

import * as BANK_FORMATS from "./bankFormats.js";
const BANK = BANK_FORMATS.BANKWEST;

const app = express();
app.use(cors());
const port = 3000;


const sourceFiles = readdirSync("./Source CSV files");
let sourceIndex = 0;
console.log(`Found source files: ` + sourceFiles);


let props = []; //Holds headings from CSV file
let jsonData = []; //Holds rows from CSV files as json, key value pairs. Keys are source from props array


function loadAndPrepSouceFile(fileIndex){
	//Read CSV file into memory
	let sourceFile = `./Source CSV files/${sourceFiles[fileIndex]}`;
	console.log(sourceFile);

	const csvData = readFileSync(sourceFile);

	console.log(`Source data loaded. String length: ${csvData.length}`);

	const csvDataArray = parse(csvData); //Parses csv string into 2D array representing grid like structure. First row is headers, following rows are data.

	// Fields included in CSV to leave out of final data as it is not needed.
	const throwAwayFields = ["BSB Number", "Cheque Number", "Transaction Type"];

	props = []; //Clear fields
	jsonData = []; //Clear fields

	//Convert resulting 2D array of CSV data to JSON, array of objects with key value pairs
	// Extract headings from data. Leavig in throw-aways to keep arrays parallel for data extraction
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
			if (prop == BANK[BANK_FORMATS.DESCRIPTION]){
				obj[BANK_FORMATS.CATEGORY] = getCategory(obj[prop]);
			}
		}
		dataArray.push(obj); //Add object to array.
	}
	console.log(`Data loaded. Row count: ${dataArray.length}`);

	//Remove throw away fields from props now that parrelel reading is no longer an issue
	props = props.filter((i) => !BANK[BANK_FORMATS.LEAVE_OUT_FIELDS].includes(i));
	props.push(BANK_FORMATS.CATEGORY);

	console.log(`Data headers: [${props}]`);

	jsonData.push(props); //Push headings into JSON
	jsonData.push(dataArray); //Push data into JSON
}


if (sourceFiles.length > 0){
	console.log("Loading first file in source folder!");
	loadAndPrepSouceFile(0);
}

//Takes a date(dd:mm:yy) and sperator character, like /, and converts it to mm:dd:yy
function goodDateToBad(dateStr, seperator){
	let dateArray = dateStr.split(seperator);
	return dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
}

function filterToMonth(srcData, monthNum){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		let eleDate = new Date(goodDateToBad(element[BANK[BANK_FORMATS.DATE]], "/"));
		if (eleDate.getMonth() === monthNum){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}

function filterToWeek(srcData, weekNum){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		let eleDate = new Date(goodDateToBad(element[BANK[BANK_FORMATS.DATE]], "/"));
		eleDate = eleDate.getDate();
		eleDate = Math.floor(eleDate / 7); //Convert day to week

		if (eleDate === weekNum){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}

function filterToAccount(srcData, accountNum){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		if (element[BANK[BANK_FORMATS.ACCOUNT_NUMBER]] === accountNum){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}

function filterToCategory(srcData, category){
	let data = [];
	let entries = srcData[1].filter((element) =>{
		if (element[BANK_FORMATS.CATEGORY] === category){
			return element;
		}
	});
	
	data.unshift(entries);
	data.unshift(props);

	return data;
}


// Server responses
app.get('/', (req, res) => { //Return all data
	if (jsonData.length == 0){
		console.log("Request received but no source data is loaded!");
		let failed = {
			success: false,
			message: "No source data loaded in server. Cannot retreive data."
		};
		res.json(failed);
		
		return
	}

	let source = req.query.source;
	let month = req.query.month;
	let week = req.query.week;
	let account = req.query.account;
	let category = req.query.category;
	
	if (source && source != sourceFiles[sourceIndex] && sourceFiles.includes(source)){
		console.log("Switching source.");
		sourceIndex = sourceFiles.indexOf(source);
		loadAndPrepSouceFile(sourceIndex);
	}

	let returnData = jsonData;

	if (account){
		returnData = filterToAccount(returnData, account);
	}

	if (category){
		returnData = filterToCategory(returnData, category);
	}

	if (month){
		returnData = filterToMonth(returnData, parseInt(month));
		if (week){
			returnData = filterToWeek(returnData, parseInt(week));
		}
	}

	res.json(returnData);
});


app.get('/files', (req, res) => { //Return all data
	res.json(sourceFiles);
});

// Run server
app.listen(port, () => {
	console.log(`CSV data server listening on port ${port}`);
});

