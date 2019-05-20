module.exports = (sequelize, Sequelize) => {
	const OS = sequelize.define("OS",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		descricao: {
			type: Sequelize.STRING
		},
		situacao: {
			type: Sequelize.STRING
		},
		idLaudo: {
			type: Sequelize.INTEGER,
			foreignKey: true
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
