var express = require('express');
var router = express.Router();

const Mecanico = require("../controller/mecanico.controller.js");

router.post('/create', Mecanico.create);

router.put('/update/:id', Mecanico.update);

router.get('/:byId', Mecanico.findByPk);

router.get('/find/user/:id', Mecanico.findByIdUsuario)

router.delete('/delete/:id', Mecanico.delete);

router.get('/oficina/:idOficina', Mecanico.findAllMecanicoByOficina);

module.exports = router;
