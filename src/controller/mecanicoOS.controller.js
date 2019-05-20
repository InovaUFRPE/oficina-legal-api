const db = require("../config/db.config.js");
const MecanicoOS = db.mecanicoOS;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const mecanicoOS = await MecanicoOS.create(profileData);
		res.status(201).send(mecanicoOS);
	} catch (err) {
		res.status(400).send(err);
	}
};
