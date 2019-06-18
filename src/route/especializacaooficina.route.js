var express = require('express');
var router = express.Router();

const EspecializacaoOficina = require("../controller/especializacaooficina.controller.js");

router.post('/create', EspecializacaoOficina.create);

router.get('/findByEspecializacao/:idEspecializacao', EspecializacaoOficina.findAllByEspecializacao);

router.get('/findByOficina/:idOficina', EspecializacaoOficina.findAllByOficina);

module.exports = router;