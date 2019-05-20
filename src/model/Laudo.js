module.exports = (sequelize, Sequelize) => {
	const Laudo = sequelize.define("Laudo",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		descricao: {
			type: Sequelize.STRING
		},
		data_hora: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW
		},
		idVeiculo: {
			type: Sequelize.INTEGER,
			foreignKey: true,

		}
	},
	{
		freezeTableName: true,
		tablename: "Laudo",
		timestamps: false
	}
	);
	return Laudo;
};
