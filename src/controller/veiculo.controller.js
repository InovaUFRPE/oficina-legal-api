const db = require('../config/db.config.js');
const Cliente = db.cliente;
const Veiculo = db.veiculo;

exports.create = (req, res) => {
    Veiculo.create({
        modelo: req.body.modelo,
        ano: req.body.ano,
        renavam: req.body.renavam,
        placa: req.body.placa,
        idCliente: req.body.Cliente.id
    }).then(veiculo => {
        res.status(201).send(veiculo)
    });
};
exports.findById = async (req, res) => {
    const veiculo = await Veiculo.findByPk(req.params.idVeiculo);
    if (veiculo){
        return res.status(200).send(veiculo);
    }
    return res.status(404).send({alert: "Veículo não encontrado."});
};