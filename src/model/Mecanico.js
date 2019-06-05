module.exports = (sequelize, Sequelize) => {
	const Mecanico = sequelize.define("Mecanico",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		curriculo: {
			type: Sequelize.TEXT,
            validate: {
							allowNull: false
              }
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
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
							allowNull: false
              }
		},
		idOficina: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
							allowNull: false
              }
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
