const db = require('../config/db.config.js');
const Agendamento = db.agendamento;
const Oficina = db.oficina;
const Veiculo = db.veiculo;

exports.create = async function(req, res){
    const data = req.body;
    console.log(data);
    try {
        const oficina = await Oficina.findOne({
            where: { id: data.idOficina }
        });
        const veiculo = await Veiculo.findOne({
            where: { id: data.idVeiculo }
        });
        if (oficina && veiculo){
            const agendamento = await Agendamento.create(data);
            res.status(201).send(agendamento);
        } else if (!oficina){
            res.status(404).send("Oficina não encontrada.")
        } else {
            res.status(404).send("Veículo não encontrado.")
        }
    } catch (err) {
		res.status(400).send(err);
	};
};

exports.findByOficina = async function(req, res){
    try {
        const agendamentos = await Agendamento.findAll({
            where: { idOficina: req.params.idOficina},
            attributes: ['id','data_hora'],
            include: [ { model: Veiculo } ]
        });
        if (agendamentos){
            res.status(200).send(agendamentos);
        } else {
            res.status(200).send({ alert: "Sem agendamentos." });
        }
    } catch (err) {
		res.status(400).send(err);
	};
}

exports.findAll = (req, res) => {
    agendamento.findAll({
    }).then(agendamento =>{
        res.status(201)
        res.send(agendamento)
    })
}