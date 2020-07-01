const JobRequests = require("../models/HireMe");

async function saveJobRequest(req, res, next) {
  try {
    await JobRequests.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Your message has been received i will get back to you soon",
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

exports.saveJobRequest = saveJobRequest;
