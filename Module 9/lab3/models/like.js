const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class like extends Model {}

//Sequelize will create this table if it doesn't exist on startup
like.init(
  {
    user_id: {type: DataTypes.INTEGER, allowNull: false, require: true},
    post_id: {type: DataTypes.STRING, allowNull: false, require: true}
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = like;
