var express = require('express');
var router = express.Router();

const Laudo = require("../controller/laudo.controller.js");
const verifyJWT = require("../config/user.auth.js");

router.post('/create', verifyJWT, Laudo.create);

module.exports = router;
