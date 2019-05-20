const db = require("../config/db.config.js");
const Usuario = db.usuario;
const Cliente = db.cliente;
const Mecanico = db.Mecanico;
const Gestor = db.Gestor;

exports.create = async function(req, res) {
	const profileData = req.body;

	try {
		const usuario = await Usuario.create(profileData);
		res.status(201).send(usuario);
	} catch (err) {
		console.log(err);
		if (err.code == 1100) {
			res.status(409).send({ code: "PR01", message: "Usuário já existe" });
		}
	}
};
exports.findAll = async function(req, res) {
	const login = req.params.login;
	const senha = req.params.senha;

	try {
		const usuario = await Usuario.findAll({
			where: { login: login, senha: senha }
		});
		res.status(200).send(usuario[0]);
	} catch (err) {
		console.log(err);
	}
};
exports.login = async function(req, res) {
	const login = req.body.login;
	const senha = req.body.senha;
	const user = await Usuario.findOne({
		where: { login: login },
		include: [
			{
				model: Cliente,
				required: false
			} /*,
			{
				model : Mecanico,
				required: false
			}*/
		]
	});
	if (!user) {
		return res.status(404).send({ error: "Usuário não cadastrado." });
	}
	if (senha != user.senha) {
		return res.status(400).send({ error: "Senha inválida." });
	}
	res.status(200).send(user);
}
exports.update = async function(req,res) {
		const idUsuario = req.params.idUsuario;
		Usuario.update( { login: req.body.login, senha: req.body.senha, email: req.body.email, ativo: req.body.ativo, }, 
						 { where: {idUsuario: req.params.idUsuario} }
					   )
					   res.status(201).send(Usuario)
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
                        Cliente.findAll({ where: { idUsuario: retorno.idUsuario } }).then(output => { res.status(200).send(output) });
                        break;
                    // usuario mecanico
                    case '02':
                        Mecanico.findAll({ where: { idUsuario: retorno.idUsuario } }).then(output => { res.status(200).send(output) });
                        break;
                    // usuario gestor
                    case '03':
                        Gestor.findAll({ where: { idUsuario: retorno.idUsuario } }).then(output => { res.status(200).send(output) });
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
