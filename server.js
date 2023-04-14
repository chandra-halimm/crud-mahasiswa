const express = require("express");
const app = express();
const port = 3000;
const sequelize = require("./db.config");

app.use(express.json());

sequelize.sync().then(() => {
  console.log("database ready");
});

const mahasiswaEnpoint = require("./routes/mahasiswa");
app.use("/mahasiswa", mahasiswaEnpoint);

app.listen(port, () => {
  console.log(`listen port on : ${port}`);
});
