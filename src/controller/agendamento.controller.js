const db = require('../config/db.config.js');
const Agendamento = db.agendamento;

exports.create = async function(req, res) {
    const profileData = req.body;

    try {
        const agendamento = await Agendamento.create(profileData);
        res.status(201).send(agendamento);
    
    }catch (err){
        res.sttus(400).send(err)
    }
}

exports.findAll = (req, res) => {
    agendamento.findAll({
    }).then(agendamento =>{
        res.status(201)
        res.send(agendamento)
    })
}

/* exports.create = (req, res) => {
    Agendamento.create({
        data_hora: req.body.data_hora,
        idVeiculo: req.body.idVeiculo,
        idOficina: req.body.idOficina

    }).then(agendamento =>{
        res.status(201)
        res.send(agendamento)
    });
};
 */