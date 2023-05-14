const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crudmahasiswa", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
