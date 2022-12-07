const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comment = new Schema({
  comment: { type: String, trim: true, required: true },
  userID: { type: String, trim: true, required: true},
  postID: { type: String, trim: true, required: true}
});

module.exports = mongoose.model("comments", comment);
