var express = require('express');
var router = express.Router();

const MecanicoOS = require("../controller/mecanicoOS.controller.js");

router.post('/add', MecanicoOS.create);

module.exports = router;
