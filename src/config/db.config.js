const env = require("./.env");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
	port: env.port,
	dialect: env.dialect,
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
db.oficina = require("../model/Oficina.js")(sequelize, Sequelize);
db.laudo = require("../model/Laudo.js")(sequelize, Sequelize);
db.os = require("../model/os.js")(sequelize, Sequelize);
db.veiculo = require("../model/Veiculo")(sequelize, Sequelize);
db.gestor = require("../model/Gestor.js")(sequelize, Sequelize);
db.agendamento = require("../model/Agendamento.js")(sequelize, Sequelize);


db.oficina.hasOne(db.gestor,{foreignKey: "idOficina"});
db.gestor.belongsTo(db.oficina,{foreignKey: "idOficina"});

db.agendamento.belongsTo(db.veiculo,{foreignKey:"idVeiculo"});
db.veiculo.hasOne(db.agendamento,{foreignKey:"id"});

db.agendamento.belongsTo(db.oficina,{foreignKey:"idVeiculo"});
db.oficina.hasOne(db.veiculo,{foreignKey:"id"});

db.cliente.hasOne(db.usuario, {foreignKey: "idUsuario"});
db.mecanico.hasOne(db.usuario, {foreignKey: "idUsuario"});
db.adm.hasOne(db.usuario, {foreignKey: "idUsuario"});
db.gestor.hasOne(db.usuario, {foreignKey: "idUsuario"});

db.veiculo.belongsTo(db.cliente, {foreignKey: "idCliente"});

db.mecanico.belongsTo(db.oficina, { foreignKey: "id" });
db.mecanicoOS.hasOne(db.os, { foreignKey: "id" });
db.mecanicoOS.hasOne(db.mecanico, { foreignKey: "id" });
db.certificado.hasOne(db.mecanico, { foreignKey: "id" });

db.laudo.belongsTo(db.veiculo, {foreignKey: "idVeiculo"});

db.os.belongsTo(db.laudo, { foreignKey: "id" });
db.os.belongsTo(db.oficina, { foreignKey: "id" });

module.exports = db;
