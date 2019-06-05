module.exports = (sequelize, Sequelize) => {
	const OS = sequelize.define("OS",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		descricao: {
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
		},
	},
	{
		freezeTableName: true,
		tablename: "OS",
		timestamps: false
	}
	);
	return OS;
};
