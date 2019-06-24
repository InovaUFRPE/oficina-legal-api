const db = require('../config/db.config.js');
const Cliente = db.cliente;
const Veiculo = db.veiculo;

exports.create = (req, res) => {
    console.log("Header: " +req.headers["x-access-token"])
    console.log("Aqui: "+JSON.stringify(req.body))
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

exports.findAll = async function(req, res) {
	console.log("Aqui")
    try{
        const veiculos = await Veiculo.findAll({
        });
        if (veiculos){
            res.status(200).send(veiculos);
        } else {
            res.status(404).send({ alert: "Sem veiculos registrados." });
        }
    }catch (err){
        res.status(400).send(err)
	}
}

exports.findById = async (req, res) => {
    const veiculo = await Veiculo.findByPk(req.params.idVeiculo);
    if (veiculo){
        return res.status(200).send(veiculo);
    }
    return res.status(404).send({alert: "Veículo não encontrado."});
};

exports.findAllByCliente = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll({
            where: { idCliente: req.params.idCliente},
            attributes: ['id','modelo','ano','renavam','placa']
        });
        res.status(200).send(veiculos)
    } catch (err) {
		res.status(400).send(err);
	};
}