const db = require('../config/db.config.js');
const Agendamento = db.agendamento;
const Oficina = db.oficina;
const Veiculo = db.veiculo;
const Cliente = db.cliente;
const Servico = db.servico;
const MecanicoOficina = db.mecanicoOficina;
const MecanicoOS = db.mecanicoOS;
const OS = db.os;

const Op = db.op;

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
            include: [ { model: Veiculo , include:[Cliente]} ]
            });
            res.status(200).send(agendamentos)

        }else if(ordem == "cliente"){
            const agendamentos = await Agendamento.findAll({
                where: { idOficina: req.params.idOficina},
                attributes: ['id','data_hora'],
                include: [ { model: Veiculo , include:[Cliente]}],
                order: [[Veiculo,Cliente,'nome','ASC']]
            });
            res.status(200).send(agendamentos)
        }else if(ordem == "data"){
            const agendamentos = await Agendamento.findAll({
                where: { idOficina: req.params.idOficina},
                attributes: ['id','data_hora'],
                include: [ { model: Veiculo , include:[Cliente]}],
                order: [['data_hora','DESC']]
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
  
exports.create = async function(req, res) {
    const idOficina = req.body.idOficina;
    const dataEhora = req.body.dataHora; // dataEhora -> "AAAA/MM/DD HH:MM:SS"
    const idServico = req.body.idServico;
    const idVeiculo = req.body.idVeiculo;
    const obs = req.body.observacao;
    var idMecanico;
    var disponivel;
    // gerar intervalo de tempo do agendamento
    const servico = await Servico.findByPk(idServico);
    if (servico) {
        const tempoServico = servico.tempoRealizacao; // -> HH:MM:SS
        const dataAgendada = dataEhora.split(" ")[0]; // -> "AAAA/MM/DD"
        const agendamentoHI = dataEhora.split(" ")[1];
        // calculando Hora Final
        let t = tempoServico.split(":");
        var date = new Date(dataEhora);
        date.setHours(date.getHours() + parseInt(t[0]));
        date.setMinutes(date.getMinutes() + parseInt(t[1]));
        const agendamentoHF = 
        `${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}:00`;
        // verificando se já existe agendamento para o veículo
        const agendamentos = await Agendamento.findAll({
            where: {
                idVeiculo: idVeiculo,
                data_hora: {
                    [Op.startsWith]: dataAgendada
                }
            }
        });
        if (!(agendamentos.length == 0)) {
            return res.status(400).send("Já existe agendamento para o veículo neste dia.");
        }
        // buscando mecanicos da Oficina
        const listaMecanicos = await MecanicoOficina.findAll({
            where: {idOficina : idOficina},
            attributes: ["idMecanico"],
            raw: true
        });
        if (!(listaMecanicos.length == 0)){
            for (mecanico in listaMecanicos){
                // buscando lista de OS por mecanico
                disponivel = true;
                idMecanico = listaMecanicos[mecanico].idMecanico;
                const listaOs = await MecanicoOS.findAll({
                    where: {idMecanico: idMecanico},
                    attributes: [],
                    include: {
                        model: OS,
                        as: "ordem",
                        where: {dataRealizacao: dataAgendada},
                        attributes: ["horaInicio", "horaFim"],
                        required: true
                    },
                    raw: true
                });
                if (!(listaOs.length == 0)){
                    // verificando a disponibilidade de horario
                    for (o in listaOs){
                        if (listaOs[o]['ordem.horaFim'] >= agendamentoHI && 
                            listaOs[o]['ordem.horaInicio'] <= agendamentoHF){
                                disponivel = false;
                                break;
                        }
                    }
                }
                if (disponivel){
                    break
                }
            }
        }
        if (disponivel){
            try {
                const agendamento = await Agendamento.create({
                    data_hora: dataEhora,
                    idOficina:  idOficina,
                    idVeiculo: idVeiculo,
                }) 
                if (agendamento){
                    const ordemServico = await OS.create({
                        observacao: obs,
                        situacao: "agendado",
                        horaInicio: agendamentoHI,
                        horaFim: agendamentoHF,
                        idOficina: idOficina,
                        idVeiculo: idVeiculo,
                        idServico: idServico,
                        dataRealizacao: dataAgendada,
                    });
                    if (ordemServico) {
                        const mecanicoOS = await MecanicoOS.create({
                            idOS: ordemServico.id,
                            idMecanico: idMecanico,
                        });
                        if (mecanicoOS){
                            return res.status(201).send(agendamento);
                        }
                    }
                }
            } catch (error) {
                console.log(error);
                return res.status(400).send({error: error});
            }
        }
        return res.status(400).send("Horário indisponível.");

    }
    return res.status(404).send("Serviço não encontrado.");
}
