const LanceType = require("../models/AddLanceTypes");
const saveImage = require("../config/saveImage");
const fs = require('fs');

async function addLanceJobType(req, res, next) {
  const { type, professionality, available } = req.body;

  if (req.files === null) {
    return res.status(400).json({
      success: false,
      error: "Please upload an image",
    });
  }

  const { image } = req.files;
  const file_path = `uploads/jobs/${image.name}`;
  const upload = await saveImage(image, file_path);

  if (!upload) {
    return res.status(400).json({
      success: false,
      error: "Image upload was unsuccessful",
    });
  }

  const decodedProfession = JSON.parse(professionality);
  try {
    await LanceType.create({ type, decodedProfession, available, file_path });
    return res.status(200).json({
      success: true,
      message: "Job type has been added",
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
}

exports.addLanceJobType = addLanceJobType;

async function getLanceTypes(req, res, next) {
  try {
    const types = await LanceType.find();
    return res.status(200).json({
      success: true,
      data: types,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
}

exports.getLanceTypes = getLanceTypes;
