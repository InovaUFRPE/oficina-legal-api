const db = require("../config/db.config.js");
const MecanicoOficina = db.mecanicoOficina;

exports.create = async function(req, res) {
	const profileData = req.body;
	try {
		const Mecanicos = await MecanicoOficina.create(profileData);
		res.status(200).send(Mecanicos);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.findAll = async function(req, res) {
    try{
        const mecanicos = await MecanicoOficina.findAll({
        });
        if (mecanicos){
            res.status(200).send(mecanicos);
        } else {
            res.status(200).send({ alert: "Sem mecanicos" });
        }
    }catch (err){
        console.log(err)
        res.status(500).send(err)
    }
}