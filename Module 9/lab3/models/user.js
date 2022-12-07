
const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class user extends Model {}

//Sequelize will create this table if it doesn't exist on startup
user.init(
  {
    name: { type: DataTypes.STRING, allowNull: false, required: true },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      required: true,
      unique: true,
    },
    gender: { type: DataTypes.STRING, allowNull: true, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = user;
