var express = require('express');
var router = express.Router();

const agendamento = require("../controller/agendamento.controller")

router.post('/create', agendamento.create);

router.post('/agoraVai', agendamento.agoraVai);

router.get('/findAll', agendamento.findAll);

router.get('/oficina/:idOficina', agendamento.findByOficinaOrder);

module.exports = router;