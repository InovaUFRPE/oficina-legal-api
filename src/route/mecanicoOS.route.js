var express = require('express');
var router = express.Router();

const MecanicoOS = require("../controller/mecanicoOS.controller.js");

router.post('/add', MecanicoOS.create);

router.get('/findAll/mecanico/:id', MecanicoOS.findAllByMechanic)

router.get('/findAll', MecanicoOS.findAll )

module.exports = router;
