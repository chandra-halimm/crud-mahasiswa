const expres = require("express");
const router = expres.Router();
const loginModels = require("../models/login");

router.get("/", async (req, res) => {
  try {
    const userLogin = await loginModels.findAll();

    res.status(200).json({
      data: userLogin,
      message: "success get all data",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "fail get all data",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { nip, nama, password } = req.body;
    const userLogin = await loginModels.create({
      nip,
      nama,
      password,
    });

    res.status(200).json({
      data: userLogin,
      message: "success add new login post data",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "error post data",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nip, password } = req.body;
    const userLogin = await loginModels.findOne({ where: { nip: nip } });

    if (userLogin.nip === userLogin.password) {
      res
        .status(200)
        .json({
          data: userLogin,
          message: "success login",
        })
        .then(() => {
          window.location.replace("/home");
        });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "error login data",
    });
  }
});

module.exports = router;
