const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Mahasiswa extends Model {}

Mahasiswa.init(
  {
    nim: {
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
    modelName: "Mahasiswa",
  }
);

module.exports = Mahasiswa;
