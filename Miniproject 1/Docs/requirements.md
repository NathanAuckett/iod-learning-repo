## What is it
An app that allows you to load, categorise and review, a standard CSV export from your bank account.

## What should it do
The app should be capable of loading the CSV data from any bank providing the formatting is not overly complex.

The app should display a table of all data, as well as a line graph indicating total balance over time.

User should be able to filter the data down to smaller time incriments, or down to categories.

## How will the app work
Data will be served via a custom locally hosted API. This will read the CSV bank transaction data and serve it to the we-app on request.

Categories will be autopmatically applied based on the naration/description of the transaction in the CSV data.

Key words will be used to determine what description should go into which a specific category.
The user will need to setup and define key words/phrases for each category.

The graph should by default show the total balance after each transaction.
As multiple transactions can occur on the same day, it may be nessesary to add up all transactions on a day in order to refine the data and display a cleaner graph.

When ordering by category, to determine how much was spent per category, a line graph of total balance is no longer useful. In this case the graph should instead show the actual debit/credit values of each transaction.