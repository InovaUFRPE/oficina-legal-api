var express = require('express');
var router = express.Router();

const Mecanico = require("../controller/mecanico.controller.js");

router.post("/api/mecanico", Mecanico.create);

router.put("/api/mecanico/:id", Mecanico.update);

router.get('/api/mecanico/:id' , Mecanico.findByPk);

router.delete("/api/mecanico/:id", Mecanico.delete);

module.exports = router;
