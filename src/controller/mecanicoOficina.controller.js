const db = require("../config/db.config.js");
const MecanicoOficina = db.mecanicoOficina;
const Oficina = db.oficina;
const Mecanico = db.mecanico;
const Usuario = db.usuario;

exports.create = async function(req,res) {
    const profileData = req.body;
    try {
        const oficina = await Oficina.findOne({
            where: {
                id: req.body.idOficina
            }
        });
        const mecanico = await Mecanico.findOne({
            where: {
                id: req.body.idMecanico
            }
        });
        if (oficina && mecanico) {
            const mecanicooficina = MecanicoOficina.create(profileData);
            res.status(200).send("Associação realizada com sucesso");
        } else if(!oficina) {
            res.status(404).send("Oficina não encontrada");
        } else if(!mecanico) {
            res.status(404).send("Mecanico não encontrado");
        }
    } catch(err) {
        res.status(500).send(err);
    };
}

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
            attributes: ["idOficina"],
            include: [{ model: Mecanico , include:[Usuario]}]
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