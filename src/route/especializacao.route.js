var express = require('express');
var router = express.Router();

const especializacao = require("../controller/especializacao.controller.js");

router.post('/create', especializacao.create);

router.put('/update/:id', especializacao.update);

router.get('/:idEspecializacao', especializacao.findById);

module.exports = router;
