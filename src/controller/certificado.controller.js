const db = require("../config/db.config.js");
const Certificado = db.certificado;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const certificado = await Certificado.findOne({
			where: { idMecanico: profileData.idMecanico }
		});
		if (!certificado) {
			const certificado = await Certificado.create(profileData);
			res.status(201).send(certificado);
		} else {
			res.status(400).send("mecanico já possui um certificado");
		}
	} catch (err) {
		res.status(400).send(err);
	}
};
exports.update = async function(req, res) {
	const id = req.params.id;
	const profileData = req.body;
	try {
		const certificado = await Certificado.findOne({ where: { id: id } });
		if (certificado) {
			await Certificado.update(profileData, { where: { id: id } });
			res.status(200).send("atualizado");
		} else {
			res.status(400).send("Certificado não existe");
		}
	} catch (err) {
		res.status(500).send(err);
	}
};
exports.findById = async function(req, res) {
	const id = req.params.id;
	try {
		const certificado = await Certificado.findOne({ where: { id: id } });
		if (certificado) {
			res.status(200).send(certificado);
		}
		res.status(400).send({ alert : "Certificado não encontrado"});
		return true;
	} catch (err) {
		res.status(500).send(err);
	}
};
