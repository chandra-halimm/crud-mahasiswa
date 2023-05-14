const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db.config");

class Dosen extends Model {}

Dosen.init(
  {
    nip: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Dosen",
  }
);

module.exports = Dosen;
