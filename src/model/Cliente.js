module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define("Cliente",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nome: {
			type: Sequelize.STRING
		},
		cpf: {
			type: Sequelize.STRING
		},
		bairro: {
			type: Sequelize.STRING
		},
		cep: {
			type: Sequelize.STRING
		},
		endereco: {
			type: Sequelize.STRING
		},
		complemento: {
			type: Sequelize.STRING
		},
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true
		}
	},
	{
		freezeTableName: true,
		tablename: "Cliente",
		timestamps: false
	}
	);
	return Cliente;
};
