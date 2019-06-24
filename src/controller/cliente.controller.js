const db = require("../config/db.config.js");
const Cliente = db.cliente;
const Usuario = db.usuario;
const Veiculo = db.veiculo;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const usuario = await Usuario.create(profileData);
		const cliente = await Cliente.create({
			nome: req.body.nome,
			cpf: req.body.cpf,
			bairro: req.body.bairro,
			cep: req.body.cep,
			endereco: req.body.endereco,
			complemento: req.body.complemento,
			idUsuario: usuario.idUsuario
		});
		res.status(201).send(cliente);
	} catch (err) {
		console.log(err);
	}
};

exports.findByPk = (req, res) => {
	Cliente.findByPk(req.params.clienteId).then(cliente => {
		res.send(cliente);
	});
};

exports.findByIdUsuario = async (req, res) => {
	const idUsuario = req.params.idUsuario;
	const cliente = await Cliente.findOne({ where: { idUsuario: idUsuario } });
	if (cliente) {
		return res.status(201).send(cliente);
	}
	return res.status(400).send({ alert: "Cliente não encontrado" });
};
exports.findAll = (req, res) => {
	Cliente.findAll({

	}).then(cliente => {
		res.status(200)
	  res.send(cliente);
	});
};

exports.findOficina = (req, res) => {
    const query = req.query !== undefined ? req.query : {};
    Oficina.findAll({where: query }).then(output =>{res.status(200).send(output)} );        
    };

// Update Cliente
exports.update = (req, res) => {
	const id = req.params.id;
	const idUsuario = req.body.usuario.idUsuario;
	
	Usuario.update({ login: req.body.usuario.login, senha: req.body.usuario.senha, email: req.body.usuario.email, ativo: req.body.usuario.ativo, },
        { where: {idUsuario: req.body.usuario.idUsuario} }
        ).then(usuario =>{
        Cliente.update({nome: req.body.nome, cpf: req.body.cpf, bairro: req.body.bairro, cep: req.body.cep, endereco: req.body.endereco, complemento: req.body.complemento}, 
            { where: {id: req.params.id} }
          ).then(() => {res.send("Atualizado com Sucesso " + id + " Cliente Atualizado " + idUsuario)});
	});
};

exports.getVeiculosByCliente = async (req, res) => {
	try {
		const veiculos = await Veiculo.findAll({
				where: { idCliente: req.params.idCliente},
				attributes: ['id','modelo','ano','renavam','placa']
		});
		if (veiculos){
				res.status(200).send(veiculos);
		} else {
				res.status(200).send({ alert: "Sem veículos cadastrados." });
		}
	} catch (err) {
			res.status(400).send(err);
	};
}