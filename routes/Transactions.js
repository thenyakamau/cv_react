const express = require("express");
const router = express.Router();
const { saveMessages } = require("../controllers/ContactMe");
const {saveJobRequest} = require('../controllers/HireMe');
const {getLanceTypes} = require('../controllers/LanceTypes');

router.route("/").post(saveMessages);

router.route("/job").post(saveJobRequest);

router.route("/getJobType").get(getLanceTypes);

module.exports = router;
