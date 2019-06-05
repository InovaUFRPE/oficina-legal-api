var express = require('express');
var router = express.Router();

const agendamento = require("../controller/agendamento.controller")

router.post('/create', agendamento.create);

router.get('/findAll', agendamento.findAll);

router.get('/oficina/:idOficina', agendamento.findByOficina);

module.exports = router;