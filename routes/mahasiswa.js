const express = require("express");
const router = express.Router();
const mahasiswaModels = require("../models/mahasiswa");

router.get("/", async (req, res) => {
  try {
    const userMahasiswa = await mahasiswaModels.findAll();

    if (!userMahasiswa) {
      res.status(400).json({
        message: "user not found",
      });
    } else {
      res.status(200).json({
        data: userMahasiswa,
        message: "success get all data",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
});

router.post;

module.exports = router;
