module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define("Cliente",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nome: {
			type: Sequelize.STRING(45),
		},
		cpf: {
			type: Sequelize.STRING(11),
		},
		bairro: {
			type: Sequelize.STRING(20)
		},
		cep: {
			type: Sequelize.STRING(8),
		},
		endereco: {
			type: Sequelize.STRING(45),
		},
		complemento: {
			type: Sequelize.STRING(20)
		},
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true,
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