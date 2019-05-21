const db = require("../config/db.config.js");
const Oficina = db.oficina;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const oficina = await Oficina.create(profileData);
		res.status(201).send(oficina);
	} catch (err) {
		res.status(400).send("erro ao cadastrar oficina");
	}
};
exports.findById = async function(req, res) {
	const id = req.params.id;
	try {
		const oficina = await Oficina.findOne({ where: { id: id } });
		if (oficina) {
			res.status(200).send(oficina);
		}
		res.status(400).send("Oficina não encontrada");
	} catch (err) {
		res.status(500).send(err);
	}
};
exports.update = async function(req, res) {
	const id = req.params.id;
	const profileData = req.body;
	try {
		const oficina = await Oficina.findOne({ where: { id: id } });
		if (oficina) {
			await Oficina.update(profileData, { where: { id: id } });
			res.status(200).send("atualizado");
		} else {
			res.status(400).send("Oficina não existe");
		}
	} catch (err) {
		res.status(500).send(err);
	}
};
exports.findAll = (req, res) => {
	Oficina.findAll({}).then(oficina => {
		res.status(201);
		res.send(oficina);
	});
};
exports.getOficinaByCidade = async function(req, res) {
	const cidade = req.params.cidade;
	try {
		const oficina = await Oficina.findAll({ where: { cidade: cidade } });
		if (oficina.length > 0) {
			res.status(200).send(oficina);
		} else {
			res.status(400).send("Não há oficinas na sua região");
		}
	} catch (err) {
		res.status(500).send(err);
	}
};
