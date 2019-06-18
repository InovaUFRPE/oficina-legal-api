var express = require('express');
var router = express.Router();

const Mecanico = require("../controller/mecanico.controller.js");

router.post('/create', Mecanico.create);

router.put('/update/:id', Mecanico.update);

router.get('/:byId', Mecanico.findAll);

router.delete('/delete/:id', Mecanico.delete);

router.get('/oficina/:idOficina', Mecanico.findAllMecanicoByOficina);

module.exports = router;
