const express = require('express');
const router = express.Router();

const {addLanceJobType} = require('../controllers/LanceTypes');

router.route('/saveJobType').post(addLanceJobType);

module.exports = router;