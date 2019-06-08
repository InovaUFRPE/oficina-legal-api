var express = require('express');
var router = express.Router();

const gestor = require('../controller/gestor.controller.js');
const verifyJWT = require("../config/user.auth.js");

//create new gestor
router.post('/create', gestor.create);
//retrive all gestors
router.get('/findAll', gestor.findAll);
//retrive gestor por id
router.get('/:id' , gestor.findByPk);
// Update gestor with Id
router.put('/update/:id', verifyJWT, gestor.update);

module.exports = router;
