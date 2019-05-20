const db = require("../config/db.config.js");
const Laudo = db.laudo;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const laudo = await Laudo.create(profileData);
		res.status(201).send(laudo);
	} catch (err) {
		res.status(400).send(err);
	}
};
