const db = require("../config/db.config.js");
const Servico = db.servico;
var jwt = require('jsonwebtoken');
require("dotenv-safe").load();

exports.create = async function(req, res) {
    const profileData = req.body;
    try {
        const servico = await Servico.create(profileData);
        res.status(201).send(servico);
    } catch (err){
        res.status(500).send(err);
    }
}
exports.update = async function(req, res) {
        const servico = await Servico.update({
            nomeServico: req.body.nomeServico
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).send(servico);
}
exports.findByPk = async function(req, res) {
    const id = req.params.id;
    try {
        const servico = await Servico.findByPk(id);
        res.status(200).send(servico);
    } catch(err) {
        res.status(500).send(err);
    }
}