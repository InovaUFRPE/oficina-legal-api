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
                notNull: true
              }
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
		idUsuario: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
                notNull: true
              }
		},
		idOficina: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
                notNull: true
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
