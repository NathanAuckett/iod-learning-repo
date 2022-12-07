const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const like = new Schema({
  userID: { type: String, trim: true, required: true},
  postID: { type: String, trim: true, required: true}
});

module.exports = mongoose.model("likes", like);
