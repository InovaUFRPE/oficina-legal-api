module.exports = (sequelize, Sequelize) => {
	const Mecanico = sequelize.define("Mecanico",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		curriculo: {
			type: Sequelize.STRING
		},
		nome: {
			type: Sequelize.STRING
		},
		cpf: {
			type: Sequelize.STRING
		},
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true
		},
		idOficina: {
			type: Sequelize.INTEGER,
			foreignKey: true
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
