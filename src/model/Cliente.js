module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define("Cliente",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nome: {
			type: Sequelize.STRING(45),
            validate: {
                allowNull: false
              }
		},
		cpf: {
			type: Sequelize.STRING(11),
            validate: {
							allowNull: false
              }
		},
		bairro: {
			type: Sequelize.STRING(20)
		},
		cep: {
			type: Sequelize.STRING(8),
            validate: {
							allowNull: false
              }
		},
		endereco: {
			type: Sequelize.STRING(45),
            validate: {
							allowNull: false
              }
		},
		complemento: {
			type: Sequelize.STRING(20)
		},
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
							allowNull: false
              }
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