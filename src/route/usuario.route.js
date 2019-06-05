var express = require('express');
var router = express.Router();

const Usuario = require("../controller/usuario.controller.js");

router.post('/create', Usuario.create);

router.get('/:login/:senha', Usuario.findAll);

router.post('/login', Usuario.login);

router.put('/disable/:id', Usuario.disable); 

router.put('/update/:idUsuario', Usuario.update);

module.exports = router;
