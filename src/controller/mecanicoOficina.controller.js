const db = require("../config/db.config.js");
const MecanicoOficina = db.mecanicoOficina;
const Oficina = db.oficina;
const Mecanico = db.mecanico;

exports.create = async function(req, res) {
	const profileData = req.body;
	try {
		const Mecanicos = await MecanicoOficina.create(profileData);
		res.status(200).send(Mecanicos);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.findMecanicoOficina = async function(req, res) {
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
exports.findAllByOficina = async function(req, res) {
    try {
        const listaMecanicos =  await MecanicoOficina.findAll({
            where: {idOficina: req.params.idOficina},
            include: [{model: Oficina}, {model: Mecanico}]
        });
        res.status(201).send(listaMecanicos);
    } catch(err){
        res.status(500).send(err);
    }
}
exports.findAllByMecanico = async function(req, res) {
    try {
        const listaMecanicos =  await MecanicoOficina.findAll({
            where: {idMecanico: req.params.idMecanico},
            include: [{model: Oficina}, {model: Mecanico}]
        });
        res.status(201).send(listaMecanicos);
    } catch(err){
        res.status(500).send(err);
    }
};