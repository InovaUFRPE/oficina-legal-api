const db = require('../config/db.config.js');
const Especializacao = db.especializacao;

exports.create = async function(req,res) {
    const profileData = req.body;
    try {
        const especializacao = await Especializacao.create(profileData);
        res.status(201).send(especializacao);
    } catch (err){
        console.log(err);
    }
};
exports.update = async function(req,res) {
    const id = req.params.id;

    Especializacao.update({
        descricao: req.body.descricao
    });
    res.status(201).send(Especializacao);
};

exports.findById = async function(req, res) {
    const id = req.params.idEspecializacao
    try {
        const especializacao = await Especializacao.findOne({
            where: {
                id: id
            }
        });
        if(especializacao) {
            res.status(200).send(especializacao);
        }
        res.status(404).send("Especialização não encontrada");
    } catch (err){
        res.status(500).send(err);
    }
};


