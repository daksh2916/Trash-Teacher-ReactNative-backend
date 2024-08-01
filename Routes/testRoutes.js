const express =require("express");
const router = express.Router();

const{feadData} = require("../Controllers/testhandler");

router.post("/test",feadData);

module.exports = router;