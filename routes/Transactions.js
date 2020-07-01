const express = require("express");
const router = express.Router();
const { saveMessages } = require("../controllers/ContactMe");
const {saveJobRequest} = require('../controllers/HireMe');

router.route("/").post(saveMessages);

router.route("/job").post(saveJobRequest);

module.exports = router;
