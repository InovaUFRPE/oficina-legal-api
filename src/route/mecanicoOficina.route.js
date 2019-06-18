var express = require('express');
var router = express.Router();

const MecanicoOficina = require("../controller/mecanicoOficina.controller.js");

router.post('/add', MecanicoOficina.create);

router.get('/findAll', MecanicoOficina.findAll);

module.exports = router;