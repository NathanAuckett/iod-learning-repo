const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const calculator = require('./routes/calculatorRoute.js');


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use(cors());
app.use('/', express.static('public'));

app.use("/calculator", calculator);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});