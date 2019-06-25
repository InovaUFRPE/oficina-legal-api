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

exports.findAllByMechanic = async function(req, res){
    idMecanico = req.params.id
	try{
		if(idMecanico){
            const os = await MecanicoOS.findAll({where: {idMecanico: idMecanico}});
			res.status(200).send(os)
		}
	}catch(err){
		res.status(400).send(err)
	}
}


exports.findAll = async function(req, res) {
    try{
        const mecanicoOS = await MecanicoOS.findAll({});
        if (mecanicoOS){
            res.status(200).send(mecanicoOS);
        } else {
            res.status(200).send({ alert: "Sem OS registrados." });
        }
    }catch (err){
        res.status(400).send(err)
	}
}