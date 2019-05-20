const db = require('../config/db.config.js');
const Gestor = db.gestor;
const Usuario = db.usuario;
const Oficina = db.oficina;

exports.create = (req, res) => {
    Usuario.create({
        login: req.body.usuario.login,
        senha: req.body.usuario.senha,
        email: req.body.usuario.email,
        ativo: req.body.usuario.ativo,
    }).then(usuario => {
        Gestor.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idUsuario: usuario.idUsuario,
            idOficina: req.body.oficina.idOficina
        }).then(gestor => {
            res.send(gestor)
        })
    })
}

 exports.findAll = (req , res) => {
    Gestor.findAll({
        attributes:["id","nome","cpf"],
        include:[{
            model:Usuario
        },{
            model:Oficina
        }]
    }).then(gestores => {
        res.send(gestores)
    });
}; 

exports.findByPk = (req, res) => {
    Gestor.findByPk(req.params.id).then(gestor => {
        res.status(200)
        res.send(gestor)
    })
};

// Update Gestor
exports.update = (req, res) => {
    const id = req.params.id;
    const idUsuario = req.body.usuario.idUsuario;

    Usuario.update({ login: req.body.usuario.login, senha: req.body.usuario.senha, email: req.body.usuario.email, ativo: req.body.usuario.ativo, },
        { where: {idUsuario: req.body.usuario.idUsuario}}
        ).then(usuario =>{
        Gestor.update({nome: req.body.nome, cpf: req.body.cpf},
            { where: {id: req.params.id} }
          ).then(() => {res.send("Atualizado com Sucesso " + id)});
    })
    
};