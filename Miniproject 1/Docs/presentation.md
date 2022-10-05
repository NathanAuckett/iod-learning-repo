
## 1. Requirements for app
1. Read bank CSV data.
2. Categorize transactions
3. Display transactions in table
4. Be able to filter transactions based on account, date and category.
5. Display chart to visualise cjhanges in balance or amount spent on particular day/category.

## 2. Overview
- The app is able to read bank csv files and categorise the transactions.
- App displays all transactions in table and shows graph to visualise data.
- App allows for account, month, week and category filters to be set.
- The user needs to provide the app with formatting info of the CSV file in order to intepret it.
- The app is designed in a way that only small changes to the code are needed to provide full function.
- Ideally I wanted to provide a user interface for providing format information but I did not have time.

## 3. How does it source data
- The app gets its data from a locally hosted and custome made api.
- The api sources its data from a csv file, whch you export from most bank websites.

## 4. How does backend process data
- The backend reads in the raw CSV data as a 2D array using the vanillaes/csv libaray.
- The CSV data is converted into json. The headers are stored as an array, and then objects are crreated to allow for key-value pairs of all the data.

## 5. How can the user interact with this data?

## 6. JS techniques used
- The overall JS is fairly simple. There is a lot of it though.
- I've made use of import in order to not only import third party code, such as the CSV reader, but I also import my own custom data structures and code for use within the app. For example the categories are in a seperate, easy to edit JS file.
- The app makes extensive use of functions, objects and arrays.
- For loops were used in conjuction with the filter method to filter the transaction data based on user input.

## 7. External tools
1. Bootstrap
2. @vanillaes/csv - read CSV data
3. Nodemon - allow for on the fly recompiles
4. Express - server
5. chart.JS - display graphs
6. Date-fns - used withing chart.js for date/time management

## 8. What kinds of HTML elements have you used (eg. tables, forms, divs, lists, headings, menus, videos, images)?
- Divs
- select
- label
- canvas

## 9. What kinds of CSS features have you used (eg. animations, backgrounds, fonts, colours, flexbox, grid)?
- Bootstrap
- Colours
- Font import
- Margin

## 10. How might you extend the features of your application in future?
- I'd like to add th