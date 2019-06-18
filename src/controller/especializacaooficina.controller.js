const db = require("../config/db.config.js");
const EspecializacaoOficina = db.especializacaooficina;
const Oficina = db.oficina;
const Especializacao = db.especializacao;

exports.create = async function(req,res) {
    const profileData = req.body;
    try {
        const oficina = await Oficina.findOne({
            where: {
                id: req.body.idOficina
            }
        });
        const especializacao = await Especializacao.findOne({
            where: {
                id: req.body.idEspecializacao
            }
        });
        if (oficina && especializacao) {
            const especializacaooficina = EspecializacaoOficina.create(profileData);
            res.status(201).send(especializacaooficina);
        } else if(!oficina) {
            res.status(404).send("Oficina não encontrada");
        } else if(!especializacao) {
            res.status(404).send("Especialização não encontrada");
        }
    } catch(err) {
        res.status(400).send(err);
    };
};


