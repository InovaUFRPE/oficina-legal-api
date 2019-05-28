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
                notNull: true
              }
		},
		cpf: {
			type: Sequelize.STRING(11),
            validate: {
                notNull: true
              }
		},
		bairro: {
			type: Sequelize.STRING(20)
		},
		cep: {
			type: Sequelize.STRING(8),
            validate: {
                notNull: true
              }
		},
		endereco: {
			type: Sequelize.STRING(45),
            validate: {
                notNull: true
              }
		},
		complemento: {
			type: Sequelize.STRING(20)
		},
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
                notNull: true
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