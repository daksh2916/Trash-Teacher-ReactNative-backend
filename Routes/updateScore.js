const express = require("express");

const router = express.Router();

const {updateScore}=require("../Controllers/updateScoreHandler");
const auth =require("../middlewares/auth");

router.put("/updateScore",auth, updateScore);

module.exports = router;