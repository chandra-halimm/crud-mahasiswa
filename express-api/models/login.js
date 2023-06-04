const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db.config");

class Login extends Model {}

Login.init(
  {
    nip: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Login",
  }
);

module.exports = Login;
