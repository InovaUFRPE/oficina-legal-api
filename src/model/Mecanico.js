module.exports = (sequelize, Sequelize) => {
	const Mecanico = sequelize.define("Mecanico",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		curriculo: {
			type: Sequelize.TEXT,
		},
		nome: {
			type: Sequelize.STRING(45),
		},
		cpf: {
			type: Sequelize.STRING(11),
		},
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true,
		}
	},
	{
		freezeTableName: true,
		tablename: "Mecanico",
		timestamps: false
	}
	);
	return Mecanico;
};
