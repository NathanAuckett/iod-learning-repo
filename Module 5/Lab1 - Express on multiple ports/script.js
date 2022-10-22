const express = require("express");

const app1 = express();
const port1 = 3000;

const app2 = express();
const port2 = 4000;

app1.get('/', (req, res) => {
    res.send('Hello World!')
});

app1.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
});

app2.get('/', (req, res) => {
    res.send('Hello World!')
});

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
});