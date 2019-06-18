const {env} = process;
const events = require("events");
const eventEmitter = new events.EventEmitter();
const db = require("../config/db.config.js");
const Oficina = db.oficina;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const googleMapsClient = require("@google/maps").createClient({
	key: env.cloudApiKey
});

exports.create = async function(req, res) {
	await googleMapsClient.geocode({ address: req.body.endereco }, function(
		err,
		response
	) {
		if (!err) {
			if (response.json.status === "ZERO_RESULTS") {
				res.status(400).send("Endereço mal formatado");
			} else {
				const ret = response.json.results[0].geometry.location;
				eventEmitter.addListener("coords", dbInsert(req, res, ret));
				eventEmitter.emit("coords");
			}
		} else {
			res.status(400).send("Endereco vazio");
		}
	});
};

async function dbInsert(req, res, data) {
	const profileData = req.body;
	try {
		const oficina = await Oficina.create({
			...profileData,
			latitude: data.lat,
			longitude: data.lng
		});
		console.log(oficina);
		res.status(201).send(oficina);
	} catch (err) {
		res.status(400).send("erro");
		console.log(err);
	}
}

exports.getOficinaGeocodeById = async function(req, res) {
	const id = req.params.id;
	try {
		const oficina = await Oficina.findOne({ where: { id: id } });
		if (oficina) {
			const latitude = oficina.latitude;
			const longitude = oficina.longitude;
			const location = { latitude, longitude };
			res.status(200).send(location);
		}
		res.status(400).send("Oficina não encontrada");
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.findById = async function(req, res) {
	const id = req.params.id;
	try {
		const oficina = await Oficina.findOne({ where: { id: id } });
		if (oficina) {
			res.status(200).send(oficina);
		}
		res.status(400).send("Oficina não encontrada");
	} catch (err) {
		res.status(500).send(err);
	}
};
exports.update = async function(req, res) {
	const id = req.params.id;
	const profileData = req.body;
	try {
		const oficina = await Oficina.findOne({ where: { id: id } });
		if (oficina) {
			await Oficina.update(profileData, { where: { id: id } });
			res.status(200).send("atualizado");
		} else {
			res.status(400).send("Oficina não existe");
		}
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.findAll2 = async function(req, res) {
    try{
        const  oficinas = await Oficina.findAll({
        });
        if (oficinas){
            res.status(200).send(oficinas);
        } else {
            res.status(200).send({ alert: "Sem agendamentos registrados." });
        }
    }catch (err){
        res.status(400).send(err)
	}
}

exports.findAll = async function(req, res){
	ordem = req.query.orderBy
	try{
		if(!ordem){
			const oficinas = await Oficina.findAll();
			res.status(200).send(oficinas)
		}else if(ordem == "razao"){
			const oficinas = await Oficina.findAll({
				order:[['razaoSocial','ASC']]
			});
			res.status(200).send(oficinas)
		}else if(ordem == "bairro"){
			const oficinas = await Oficina.findAll({
				order:[['bairro','ASC']]
			});
			res.status(200).send(oficinas)
		}else{
            res.status(200).send({alert:"Sem Oficinas registrados."})
        }

	}catch(err){
		res.status(400).send(err)
	}
}

exports.getOficinaByCidade = async function(req, res) {
	const cidade = req.params.cidade;
	try {
		const oficina = await Oficina.findAll({ where: { cidade: cidade } });
		if (oficina.length > 0) {
			res.status(200).send(oficina);
		} else {
			res.status(400).send("Não há oficinas na sua região");
		}
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.getOficinaByNome = async function(req, res) {
	const nome = req.params.nome;
	const cidade = req.params.cidade;
	try {
		const oficina = await Oficina.findAll({
			where: { [Op.and]: 
					{
						razaoSocial: {[Op.like]: "%" + nome + "%"},
						cidade: cidade
					}
				
			}
		});
		if (oficina.length > 0) {
			res.status(200).send(oficina);
		} else {
			res.status(400).send("Sua busca não retornou resultados na sua cidade");
		}
	} catch (err) {
		res.status(500).send(err);
	}
};