const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
});

module.exports = mongoose.model("users", user);
