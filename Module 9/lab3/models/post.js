// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const post = new Schema({
//   title: { type: String, trim: true, required: true },
//   description: { type: String, trim: true, required: true },
//   userID: { type: String, trim: true, required: true},
// });

// module.exports = mongoose.model("posts", post);


const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class post extends Model {}

//Sequelize will create this table if it doesn't exist on startup
post.init(
  {
    title: { type: DataTypes.STRING, allowNull: false, required: true },
    user_id: {type: DataTypes.INTEGER, allowNull: false, require: true},
    description: { type: DataTypes.STRING, allowNull: true}
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = post;
