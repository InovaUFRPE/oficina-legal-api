var express = require('express');
var router = express.Router();

const EspecializacaoOficina = require("../controller/especializacaooficina.controller.js");

router.post('/create', EspecializacaoOficina.create);

module.exports = router;