var express = require('express');
var router = express.Router();

const MecanicoOficina = require("../controller/mecanicoOficina.controller.js");

router.post('/add', MecanicoOficina.create);

router.get('/mecanicoOficina/findMecanicos', MecanicoOficina.findMecanicoOficina);

router.get('/findByOficina/:idOficina', MecanicoOficina.findAllByOficina);

router.get('/findByMecanico/:idMecanico', MecanicoOficina.findAllByMecanico);

module.exports = router;