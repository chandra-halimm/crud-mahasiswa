const express = require("express");
const router = express.Router();
const dosenModels = require("../models/dosen");

router.get("/", async (req, res) => {
  try {
    const userModels = await dosenModels.findAll();

    if (!userModels) {
      res.status(400).json({
        message: "fail get all data",
      });
    } else {
      res.status(200).json({
        data: userModels,
        message: "get all data success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "get dosen internal server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nip, name, email, alamat } = req.body;
    const userDosen = await dosenModels.create({
      nip,
      name,
      email,
      alamat,
    });

    if (!userDosen) {
      res.status(400).json({
        message: "post dosen failed",
      });
    } else {
      res.status(200).json({
        data: userDosen,
        message: "success post dosen data",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "post dosen internal server error",
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const { nip, name, email, alamat, nipBaru } = req.body;
    const userDosen = await dosenModels.update(
      {
        nip: nipBaru,
        name,
        email,
        alamat,
      },
      { where: { nim: nim } }
    );

    if (!userDosen) {
      res.status(400).json({
        message: "invalid update dosen",
      });
    } else {
      res.status(200).json({
        data: userDosen,
        message: "success update data dosen",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "invalid server error",
    });
  }
});

module.exports = router;
