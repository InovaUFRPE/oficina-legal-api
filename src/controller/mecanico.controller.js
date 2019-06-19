const db = require("../config/db.config.js");
const Mecanico = db.mecanico;
const Usuario = db.usuario;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const usuario = await Usuario.create(profileData);
		const mecanico = await Mecanico.create({
			...profileData,
			idUsuario: usuario.idUsuario
		});
		res.status(201).send(mecanico);
	} catch (err) {
		res.status(400).send("erro ao cadastrar mecanico");
	}
};
exports.update = async function(req, res) {
	const id = req.params.id;
	const profileData = req.body;
	try {
		const mecanico = await Mecanico.findOne({where : {id: id}});
		if (mecanico){
			await Mecanico.update(profileData, {where:{id:id}});
			res.status(200).send("atualizado");
		}else{
			res.status(400).send("Mecanico não existe");
		}
	}catch (err) {
		res.status(500).send(err);
	}
};
exports.findByPk = async function(req, res) {
	const id = req.params.id;
	try {
		const mecanico = await Mecanico.findOne({where : {id: id}});
		if (mecanico){
			res.status(200).send(mecanico);
		}
		res.status(400).send("Mecanico não encontrado");
		return true;
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.delete = async function(req, res) {
	const id = req.params.id;
	try {
		const mecanico = await Mecanico.findOne({where : {id: id}});
		if (mecanico){
			await Mecanico.destroy({where : {id: id}});
			res.status(200).send("deletado");
		}else{
			res.status(400).send("Mecanico não existe");
		}
	}catch (err) {
		res.status(500).send(err);
	}
};
exports.findByPk = (req , res) => {
    Mecanico.findAll({
		where:{id: req.params.byId},
        attributes:["id","nome","cpf", "curriculo"],
        include:[{
            model:Usuario
        }]
    }).then(mecanicos => {
        res.send(mecanicos)
    });
}
exports.findAllMecanicoByOficina = async function (req , res){
    try{
		const Allmecanico = await Mecanico.findAll({
				where: {idOficina: req.params.idOficina},
			attributes:["id","nome","cpf", "curriculo", "idOficina", "idUsuario"],
			include: [{model: Usuario}]
		});
		res.status(200).send(Allmecanico);
	}catch(err){
		console.log(err);
		res.status(500).send(err);
	}
};