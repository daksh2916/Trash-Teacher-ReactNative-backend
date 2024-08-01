const express = require("express");
const router = express.Router();

const { showLeaderBoard } = require("../Controllers/leaderboardHandler");

router.get("/leaderboard", showLeaderBoard); // Corrected path

module.exports = router; 