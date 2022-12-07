const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class comment extends Model {}

//Sequelize will create this table if it doesn't exist on startup
comment.init(
  {
    comment: { type: DataTypes.STRING, allowNull: false, require: true },
    user_id: {type: DataTypes.INTEGER, allowNull: false, require: true},
    post_id: { type: DataTypes.STRING, allowNull: false, require: true}
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = comment;
