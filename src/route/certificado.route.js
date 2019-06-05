var express = require('express');
var router = express.Router();

const Certificado = require("../controller/certificado.controller.js");

router.post('/create', Certificado.create);

router.get('/:id', Certificado.findById);

router.put('/update/:id', Certificado.update);


module.exports = router;
