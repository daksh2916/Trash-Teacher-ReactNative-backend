const express = require("express");
const router = express.Router();

const { createUser } = require("../Controllers/registrationHandler");

router.post("/registration", createUser); // Corr

module.exports = router;
