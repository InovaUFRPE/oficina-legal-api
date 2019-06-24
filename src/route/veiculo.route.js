var express = require('express');
var router = express.Router();

const Veiculo =  require('../controller/veiculo.controller.js');
const verifyJWT = require("../config/user.auth.js");


router.post('/add', verifyJWT, Veiculo.create);

router.get('/:idVeiculo', Veiculo.findById);

router.get('/:idCliente/veiculos', Veiculo.findAllByCliente);

router.post('/findAll', Veiculo.findAll)

module.exports = router;
