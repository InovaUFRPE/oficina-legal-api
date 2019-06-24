var express = require('express');
var router = express.Router();

const cliente = require("../controller/cliente.controller.js");

router.post("/register", cliente.create);

router.get('/findAll', cliente.findAll);

router.get("/:clienteId", cliente.findByPk);

router.get("/findByIdUsuario/:idUsuario", cliente.findByIdUsuario);

/*router.post('/api/cliente', cliente.findOficina);*/

router.get('/:idCliente/veiculos', cliente.getVeiculosByCliente);

router.put('/update/:id', cliente.update);

module.exports = router;
