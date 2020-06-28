const express = require("express");
const router = express.Router();
const { saveMessages } = require("../controllers/ContactMe");

router.route("/").post(saveMessages);

module.exports = router;
