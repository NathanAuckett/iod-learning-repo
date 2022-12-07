const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  userID: { type: String, trim: true, required: true},
});

module.exports = mongoose.model("posts", post);
