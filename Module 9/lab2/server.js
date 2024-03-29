const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const mongoose = require("./dbConnect");

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/posts", require("./routes/postRoute"));
app.use("/api/comments", require("./routes/commentRoute"));
app.use("/api/likes", require("./routes/likeRoute"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!"});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
