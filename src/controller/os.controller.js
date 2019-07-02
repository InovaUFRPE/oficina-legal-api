const db = require("../config/db.config.js");
const Os = db.os;
const Veiculo = db.veiculo;
const Servico = db.servico;
const Laudo = db.laudo;
const Cliente = db.cliente;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const os = await Os.create(profileData);
		res.status(201).send(os);
	} catch (err) {
		res.status(400).send(err);
	}
};
exports.findById = async function(req, res) {
	const id = req.params.id;
	try {
		const os = await Os.findOne({where : {id: id}});
		if (os){
			res.status(200).send(os);
		}
		res.status(404).send({ alert : "OS não encontrada."});
	} catch (err) {
		res.status(500).send(err);
	}
}
exports.update = async function(req, res) {
	const os = await Os.update({
		observacao: req.body.observacao,
		situacao: req.body.situacao,
		horaInicio: req.body.horaInicio,
		horaFim: req.body.horaFim,
		idLaudo: req.body.idLaudo,
		idOficina: req.body.idOficina,
		idVeiculo: req.body.idVeiculo,
		idServico: req.body.idServico,
	},{
		where: {
			id: req.params.id
		}
	});
	res.status(201).send(os);
}
exports.findAllByOficina = async function(req, res){
	try{
		const AllOs = await Os.findAll({
			where: { idOficina: req.params.idOficina },
			attributes: ["id","observacao","situacao","horaInicio","horaFim"],
			include: [ { model: Veiculo, include:[Cliente]}, {model: Laudo}, 
			{model: Servico, attributes: ["nomeServico","preco","tempoRealizacao"]}]
		});
		res.status(200).send(AllOs);
	} catch(err){
		console.log(err);
		res.status(500).send(err);
	}
}

exports.findAllByVeiculo = async function(req, res){
	try{
		const AllOs = await Os.findAll({
			where: { idVeiculo: req.params.idVeiculo },
			attributes: ["id","observacao","situacao","horaInicio","horaFim"],
			include: [ { model: Veiculo, include:[Cliente]}, {model: Laudo}, 
			{model: Servico, attributes: ["nomeServico","preco","tempoRealizacao"]}]
		});
		res.status(200).send(AllOs);
	} catch(err){
		console.log(err);
		res.status(500).send(err);
	}
}
