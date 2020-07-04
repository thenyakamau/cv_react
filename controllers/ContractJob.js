const Contracts = require("../models/ContractJob");
async function contractJob(req, res, next) {
  try {
    await Contracts.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Your contract has been received i contact you soon",
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

exports.contractJob = contractJob;
