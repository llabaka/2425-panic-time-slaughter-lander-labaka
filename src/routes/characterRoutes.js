const express = require("express");
const router = express.Router();

const characterController = require('../controllers/charachterController');

router.get("/", characterController.getAllCharacters);

module.exports = router;