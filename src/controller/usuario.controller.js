const db = require("../config/db.config.js");
var jwt = require('jsonwebtoken');
const Usuario = db.usuario;
const Cliente = db.cliente;
const Mecanico = db.mecanico;
const Gestor = db.gestor;
const Adm = db.adm;
const Oficina = db.oficina;

exports.create = async function(req, res) {
	const profileData = req.body;
	try {
		const usuario = await Usuario.create(profileData);
		res.status(201).send(usuario);
	} catch (err) {
		console.log(err);
		if (err.code == 1100) {
			res.status(409).send({ 
				code: "PR01", 
				message: "Usuário já existe" 
			});
		}
	}
};
exports.login = async function(req, res) {
	const login = req.body.login;
	const email = req.body.email;
	const senha = req.body.senha;
	var user;
	if(login){
		user = await Usuario.findOne({
			where: { login: login }
		});
	} else {
		user = await Usuario.findOne({
			where: { email: email }
	})};
	if (!user) {
		return res.status(404).send({ auth: false, alert: "Usuário não cadastrado." });
	}
	if (senha != user.senha) {
		return res.status(400).send({ auth: false, alert: "Senha inválida." });
	}
	if (!user.ativo){
		return res.status(400).send({ auth: false, alert: "Usuário desativado."});
	}
	//auth ok
	const id = user.idUsuario;
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 86400 // tempo em segundos (1 dia)
    });
    res.status(200).send({ 
		auth: true,
		token: token, 
		user: {
			id: user.idUsuario,
			login: user.login, 
			email: user.email
		} 
	});
};
exports.update = async function(req,res) {
		Usuario.update( { 
			login: req.body.login,
			senha: req.body.senha,
			email: req.body.email,
			ativo: req.body.ativo,
		}, 
		{ 
			where: { idUsuario: req.params.idUsuario} 
		});
		res.status(201).send(Usuario);
};
exports.auth = (req, res) => {
    let password = req.body.senha;
    let email = req.body.email;
    let tipo = req.body.tipo;
    const crypto = require('crypto')
    const alg = 'aes-256-ctr'
    const cipher = crypto.createCipher(alg, pwd)
    const crypted = cipher.update(password, 'utf8', 'hex')

    Usuario.findAll({ where: { email: email } })
        .then(retorno => {
            if (retorno.senha === crypted) {
                switch (tipo) {
                    // usuario cliente
                    case '01':
						Cliente.findAll({ where: { idUsuario: retorno.idUsuario } })
							.then(output => { res.status(200).send(output) });
                        break;
                    // usuario mecanico
                    case '02':
						Mecanico.findAll({ where: { idUsuario: retorno.idUsuario } })
							.then(output => { res.status(200).send(output) });
                        break;
                    // usuario gestor
                    case '03':
						Gestor.findAll({ where: { idUsuario: retorno.idUsuario } })
							.then(output => { res.status(200).send(output) });
                        break;
                        // usuario admin
                    case '04':

                    default:
                        res.status(400).send('error!');
                }
            }
            else {
                res.status(200).send("Login ou senha incorretos!")
            };

        }).catch(err => res.send("Houve um erro inesperado"));
};
exports.disable = async function(req, res, next) {
	Usuario.update(
		{ativo: 0},
		{where: {idUsuario: req.params.id} }
	  )
	  .then(function() {
		return res.json({ alert : "O usuário foi desativado."})
	  })
	  .catch(next)
};
exports.active = async function(req, res, next) {
	Usuario.update(
		{
			ativo: 1
		},
		{
			where: {
				idUsuario: req.params.id} }
	  )
	  .then(function() {
		return res.json({ alert : "O usuário foi ativado."})
	  })
	  .catch(next)
};

exports.getGestorOrAdm = async function(req, res){
	try {
		const gestor = await Gestor.findOne({
			attributes: ['nome', 'cpf', 'id'],
			where: { idUsuario : req.params.id },
			include: [ { 
				model: Usuario,
				required: true
			}, {
				model: Oficina,
				 required: true
			}, ]
		});
		if (!gestor) {
			const adm = await Adm.findOne({
				attributes: ['nome', 'cpf', 'id'],
				where: {idUsuario: req.params.id},
				include: [ { 
					model: Usuario,
					required: true
				 } ]
			});
			if (adm){
				adm.usuario.tipo = "04";
				return res.status(200).send(adm);
			} return res.status(404).send({alert: "Não encontrado."});
		} 
		return res.status(200).send(gestor);
	} catch (err) {
		console.log(err);
		return res.status({error: err});
	}
}

exports.findByPk = async (req, res) => {
	const user = await Usuario.findByPk(req.params.id)
	const id = user.idUsuario;
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 86400 // tempo em segundos (1 dia)
    });
    res.status(200).send({ 
		auth: true,
		token: token, 
		user: {
			id: user.idUsuario,
			login: user.login, 
			email: user.email
		} 
	});
}
