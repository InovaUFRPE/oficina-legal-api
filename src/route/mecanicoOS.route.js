var express = require('express');
var router = express.Router();

const MecanicoOS = require("../controller/mecanicoos.controller.js");

router.post('/add', MecanicoOS.create);

module.exports = router;
