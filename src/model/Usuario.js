module.exports = (sequelize, Sequelize) => {
	const usuario = sequelize.define('usuario', {
	  login: {
		type: Sequelize.STRING(45)
	  },
	  senha: {
		type: Sequelize.STRING(45)
		},
		email: {
		type: Sequelize.STRING(45)
		},
		ativo: {
		type: Sequelize.BOOLEAN,
		validate: {
			notNull: true
		  }
		},
		idUsuario: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
		}

	},
	{	
		timestamps: false,
		freezeTable: true, tableName: "Usuario"

	}
);
	return usuario;
}    