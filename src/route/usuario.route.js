var express = require('express');
var router = express.Router();

const Usuario = require("../controller/usuario.controller.js");

router.post('/create', Usuario.create);

router.post('/login', Usuario.login);

router.get('/:id', Usuario.findByPk)

router.get('/admin/:id', Usuario.getGestorOrAdm);

router.put('/disable/:id', Usuario.disable); 

router.put('/update/:idUsuario', Usuario.update);

module.exports = router;
