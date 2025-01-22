const express = require("express");
const router = express.Router();

const timeController = require('../controllers/timeController');

router.post("/", timeController.createNewTime);

module.exports = router;