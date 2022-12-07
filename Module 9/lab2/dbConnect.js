require("dotenv").config();

const Mongoose = require("mongoose");

const uri = process.env.uri;
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Connect to MongoDB
Mongoose.connect(uri, mongooseOptions, function (err) {
  if (err) {
    console.log("DB Error: ", err);
    process.exit(1);
  } else {
    console.log("MongoDB Connected");
  }
});

exports.Mongoose = Mongoose;
