const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const userRoute = require('./routes/userRoute');

app.use(cors());

app.use("/", userRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})