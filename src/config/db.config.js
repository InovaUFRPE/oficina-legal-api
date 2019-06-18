const { env } = process;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USERNAME, env.DB_PASSWORD, {
	host: env.DB_HOST,
	port: env.DB_PORT,
	dialect: env.DB_DIALECT,
	operatorsAliases: false,
	timezone: "-03:00"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.adm = require("../model/Adm.js")(sequelize, Sequelize);
db.certificado = require("../model/Certificado.js")(sequelize, Sequelize);
db.cliente = require("../model/Cliente.js")(sequelize, Sequelize);
db.mecanicoOS = require("../model/MecanicoOS.js")(sequelize, Sequelize);
db.usuario = require("../model/Usuario.js")(sequelize, Sequelize);
db.mecanico = require("../model/Mecanico.js")(sequelize, Sequelize);
db.mecanicoOficina = require("../model/MecanicoOficina.js")(sequelize, Sequelize);
db.oficina = require("../model/Oficina.js")(sequelize, Sequelize);
db.laudo = require("../model/Laudo.js")(sequelize, Sequelize);
db.os = require("../model/OS.js")(sequelize, Sequelize);
db.veiculo = require("../model/Veiculo")(sequelize, Sequelize);
db.gestor = require("../model/Gestor.js")(sequelize, Sequelize);
db.agendamento = require("../model/Agendamento.js")(sequelize, Sequelize);
db.servico = require("../model/Servico.js")(sequelize, Sequelize);
db.especializacao = require("../model/Especializacao.js")(sequelize, Sequelize);
db.especializacaooficina = require("../model/EspecializacaoOficina.js")(sequelize, Sequelize);

db.oficina.hasOne(db.gestor,{foreignKey: "idOficina"});
db.gestor.belongsTo(db.oficina,{foreignKey: "idOficina"});

db.agendamento.belongsTo(db.veiculo,{foreignKey:"idVeiculo"});
db.veiculo.hasOne(db.agendamento,{foreignKey:"id"});

db.agendamento.belongsTo(db.oficina,{foreignKey:"idVeiculo"});
db.oficina.hasOne(db.veiculo,{foreignKey:"id"});

db.cliente.belongsTo(db.usuario, {foreignKey: "idUsuario"});
db.mecanico.belongsTo(db.usuario, {foreignKey: "idUsuario"});
db.adm.belongsTo(db.usuario, {foreignKey: "idUsuario"});
db.gestor.belongsTo(db.usuario, {foreignKey: "idUsuario"});

db.veiculo.belongsTo(db.cliente, {foreignKey: "idCliente"});
db.oficina.hasOne(db.mecanico, {foreignKey: "idOficina"});

db.mecanicoOficina.hasOne(db.mecanico, {foreignKey: "idMecanico"});
db.mecanicoOficina.belongsTo(db.oficina, {foreignKey: "idOficina"});


db.mecanico.belongsTo(db.oficina, { foreignKey: "id" });
db.mecanicoOS.hasOne(db.os, { foreignKey: "id" });
db.mecanicoOS.hasOne(db.mecanico, { foreignKey: "id" });
db.certificado.hasOne(db.mecanico, { foreignKey: "id" });

db.laudo.belongsTo(db.veiculo, {foreignKey: "idVeiculo"});

db.laudo.hasMany(db.os, { foreignKey: "idLaudo" });
db.os.belongsTo(db.laudo, { foreignKey: "idLaudo" });

db.os.belongsTo(db.oficina, { foreignKey: "id" });

db.veiculo.hasMany(db.os, { foreignKey: "idVeiculo" });
db.os.belongsTo(db.veiculo, { foreignKey: "idVeiculo" });

db.servico.belongsTo(db.oficina, {foreignKey: "id"});

db.especializacaooficina.belongsTo(db.oficina, {foreignKey: "idOficina"});
db.especializacaooficina.belongsTo(db.especializacao, {foreignKey: "idEspecializacao"});
module.exports = db;
