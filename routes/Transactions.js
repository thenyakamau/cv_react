const express = require("express");
const router = express.Router();
const { saveMessages } = require("../controllers/ContactMe");
const {saveJobRequest} = require('../controllers/HireMe');
const {getLanceTypes} = require('../controllers/LanceTypes');
const {contractJob} = require("../controllers/ContractJob");

router.route("/").post(saveMessages);

router.route("/job").post(saveJobRequest);

router.route("/getJobType").get(getLanceTypes);

router.route("/saveContract").post(contractJob);

module.exports = router;
