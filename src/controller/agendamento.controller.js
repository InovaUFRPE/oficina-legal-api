const db = require('../config/db.config.js');
const Agendamento = db.agendamento;
const Oficina = db.oficina;
const Veiculo = db.veiculo;
const Cliente = db.cliente;

exports.create = async function(req, res){
    const data = req.body;
    console.log(data);
    try {
        const oficina = await Oficina.findOne({
            where: { id: data.idOficina }
        });
        const veiculo = await Veiculo.findOne({
            where: { id: data.idVeiculo }
        });
        if (oficina && veiculo){
            const agendamento = await Agendamento.create(data);
            res.status(201).send(agendamento);
        } else if (!oficina){
            res.status(404).send("Oficina não encontrada.")
        } else {
            res.status(404).send("Veículo não encontrado.")
        }
    } catch (err) {
		res.status(400).send(err);
	};
};

exports.findByOficina = async function(req, res){
    try {
        const agendamentos = await Agendamento.findAll({
            where: { idOficina: req.params.idOficina},
            attributes: ['id','data_hora'],
            include: [ { model: Veiculo , include:[Cliente]} ]
        });
        res.status(200).send(agendamentos)
        
    } catch (err) {
		res.status(400).send(err);
	};
}
 
exports.findAll = async function(req, res) {
    try{
        const  agendamentos = await Agendamento.findAll({
        });
        if (agendamentos){
            res.status(200).send(agendamentos);
        } else {
            res.status(200).send({ alert: "Sem agendamentos registrados." });
        }
    }catch (err){
        res.status(400).send(err)
    }
}

 exports.findByOficinaOrder = async function(req, res){
    ordem = req.query.orderBy
    try {
        if(!ordem){
            const agendamentos = await Agendamento.findAll({
                where: { idOficina: req.params.idOficina},
                attributes: ['id','data_hora'],
                include: [  { model: Veiculo , include:[Cliente]} ]
            });
            res.status(200).send(agendamentos)

        }else if(ordem == "cliente"){
            const agendamentos = await Agendamento.findAll({
                where: { idOficina: req.params.idOficina},
                attributes: ['id','data_hora'],
                include: [ { model: Veiculo , include:[Cliente]}],
                order: [[Veiculo,'idCliente','ASC']]
            });
            res.status(200).send(agendamentos)
        }else if(ordem == "data"){
            const agendamentos = await Agendamento.findAll({
                where: { idOficina: req.params.idOficina},
                attributes: ['id','data_hora'],
                include: [ { model: Veiculo , include:[Cliente]}],
                order: [['data_hora','ASC']]
            });
            res.status(200).send(agendamentos)
        }else if(ordem == "modelo"){
            const agendamentos = await Agendamento.findAll({
                where: { idOficina: req.params.idOficina},
                attributes: ['id','data_hora'],
                include: [ { model: Veiculo , include:[Cliente]} ],
                order: [[Veiculo,'modelo','ASC']]
            });
            res.status(200).send(agendamentos)
        }else{
            res.status(200).send({alert:"Sem agendamentos registrados."})
        }
    } catch (err) {
    res.status(400).send(err);
    };
}    
  