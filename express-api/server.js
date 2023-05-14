const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const sequelize = require("./db.config");

app.use(cors());
app.use(express.json());
sequelize.sync().then(() => {
  console.log("database ready");
});

const dosenEnpoint = require("./routes/dosen");
const mahasiswaEnpoint = require("./routes/mahasiswa");
app.use("/mahasiswa", mahasiswaEnpoint);
app.use("/dosen", dosenEnpoint);

app.listen(port, () => {
  console.log(`listen port on : ${port}`);
});
