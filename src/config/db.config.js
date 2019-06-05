const env = require("./.env");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
	dialect: env.dialect,
	operatorsAliases: false,
	timezone: "-03:00"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.certificado = require("../model/Certificado.js")(sequelize, Sequelize);
db.cliente = require("../model/Cliente.js")(sequelize, Sequelize);
db.mecanicoOS = require("../model/MecanicoOS.js")(sequelize, Sequelize);
db.usuario = require("../model/Usuario.js")(sequelize, Sequelize);
db.mecanico = require("../model/Mecanico.js")(sequelize, Sequelize);
db.oficina = require("../model/Oficina.js")(sequelize, Sequelize);
db.laudo = require("../model/Laudo.js")(sequelize, Sequelize);
db.os = require("../model/os.js")(sequelize, Sequelize);
db.veiculo = require('../model/Veiculo')(sequelize, Sequelize);
db.gestor = require('../model/Gestor.js')(sequelize, Sequelize);
db.agendamento = require('../model/Agendamento.js')(sequelize, Sequelize);

db.mecanicoOS.hasOne(db.os, { foreignKey: "id" });
db.mecanicoOS.hasOne(db.mecanico, { foreignKey: "id" });
db.certificado.hasOne(db.mecanico, { foreignKey: "id" });
db.os.hasOne(db.laudo, { foreignKey: "id" });
db.os.hasOne(db.oficina, { foreignKey: "id" });
//db.laudo.hasOne(db.veiculo, { foreignKey: "idVeiculo" });
//db.mecanico.hasOne(db.usuario, { foreignKey: "idUsuario" });
db.mecanico.hasOne(db.oficina, { foreignKey: "id" });
db.usuario.hasOne(db.cliente, { foreignKey: "idUsuario" });
db.usuario.hasOne(db.mecanico, {foreignKey:"idUsuario"});
db.cliente.belongsTo(db.usuario, { foreignKey: "idUsuario" });

db.cliente.hasOne(db.veiculo, {foreignKey: "idCliente"})
db.veiculo.belongsTo(db.cliente,{foreignKey: "idCliente"})

db.oficina.hasOne(db.gestor,{foreignKey: 'idOficina'})
db.gestor.belongsTo(db.oficina,{foreignKey: 'idOficina'}) 

db.agendamento.belongsTo(db.veiculo,{foreignKey:'idVeiculo'})
db.veiculo.hasOne(db.agendamento,{foreignKey:"id"})

db.agendamento.belongsTo(db.oficina,{foreignKey:'idVeiculo'})
db.oficina.hasOne(db.veiculo,{foreignKey:"id"})

module.exports = db;
