const express = require("express");
const router = express.Router();
const mahasiswaModels = require("../models/mahasiswa");
const { where } = require("sequelize");

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
      message: "get methode internal server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nim, name, email, alamat } = req.body;
    const userMahasiswa = await mahasiswaModels.create({
      nim,
      name,
      email,
      alamat,
    });

    if (!userMahasiswa) {
      res.status(400).json({
        message: "failed input",
      });
    } else {
      res.status(200).json({
        data: userMahasiswa,
        message: "input success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "create methode internal server error",
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const { nim, name, email, alamat, nimBaru } = req.body;
    const userMahasiswa = await mahasiswaModels.update(
      {
        nim: nimBaru,
        name,
        email,
        alamat,
      },
      {
        where: { nim: nim },
      }
    );

    if (!userMahasiswa) {
      res.status(400).json({
        message: "update failed",
      });
    } else {
      res.status(200).json({
        data: userMahasiswa,
        message: "update Berhasil",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "update methode internal server error",
    });
  }
});

router.delete("/:nim", async (req, res) => {
  try {
    const { nim } = req.params;
    const userMahasiswa = await mahasiswaModels.findOne({
      where: { nim: nim },
    });

    if (!userMahasiswa) {
      res.status(400).json({
        message: "deleted fail",
      });
    } else {
      await userMahasiswa.destroy();
      res.status(200).json({
        data: userMahasiswa,
        message: "deleted success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "delete methode internal server error",
    });
  }
});

module.exports = router;
