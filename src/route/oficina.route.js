var express = require('express');
var router = express.Router();

const Oficina = require("../controller/oficina.controller.js");
const verifyJWT = require("../config/user.auth.js");

router.post('/create', Oficina.create);

router.get('/:id', Oficina.findById);

router.put('/update/:id', verifyJWT, Oficina.update);

router.get('/cidade/:cidade', Oficina.getOficinaByCidade);

router.get('/findAll', Oficina.findAll);

router.get('/geocode/:id', Oficina.getOficinaGeocodeById);

module.exports = router;
