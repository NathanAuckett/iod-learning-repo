// To add new bank: 
// Add new csv_formats entry. Eg:
//   csv_formats[YOUR_BANK_NAME] = {}
// Then add data options and set them to their expected column number in the CSV. Eg:
//   csv_formats[YOUR_BANK_NAME][ACCOUNT_NUMBER] = 1
//   csv_formats[YOUR_BANK_NAME][DATE] = 2

//Data
export const ACCOUNT_NUMBER = "accountNumber";
export const DATE = "transactionDate";
export const DESCRIPTION = "narration";
export const DEBIT = "debit";
export const CREDIT = "credit";
export const BALANCE = "balance";
export const LEAVE_OUT_FIELDS = "leaveOut";
export const CATEGORY = "Category";

//Bank formats
export let BANKWEST = {};
BANKWEST[ACCOUNT_NUMBER] = "Account Number";
BANKWEST[DATE] = "Transaction Date";
BANKWEST[DESCRIPTION] = "Narration";
BANKWEST[DEBIT] = "Debit";
BANKWEST[CREDIT] = "Credit";
BANKWEST[BALANCE] = "Balance";
BANKWEST[LEAVE_OUT_FIELDS] = ["BSB Number", "Cheque Number", "Transaction Type"];