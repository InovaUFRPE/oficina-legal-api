var express = require('express');
var router = express.Router();

const servico = require('../controller/servico.controller');
const verifyJWT = require("../config/user.auth.js");

router.post("/register", servico.create);

router.put("/update/:id", verifyJWT, servico.update);

router.get("/:id", servico.findByPk);

module.exports = router;
