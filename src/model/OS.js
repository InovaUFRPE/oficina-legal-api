module.exports = (sequelize, Sequelize) => {
	const OS = sequelize.define("OS",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		observacao: {
			type: Sequelize.TEXT,
		},
		situacao: {
			type: Sequelize.STRING(20),
		},
		idLaudo: {
			type: Sequelize.INTEGER,
			foreignKey: true,
		},
		idOficina: {
			type: Sequelize.INTEGER,
			foreignKey: true,
		},
		idVeiculo: {
			type: Sequelize.INTEGER,
			foreignKey: true,
		},
		idServico: {
			type: Sequelize.INTEGER,
			foreignKey: true,
		},
		horaInicio: {
			type: Sequelize.TIME,
		},
		horaFim: {
			type: Sequelize.TIME,
		}
	},
	{
		freezeTableName: true,
		tablename: "OS",
		timestamps: false
	}
	);
	return OS;
};
