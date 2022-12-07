const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})