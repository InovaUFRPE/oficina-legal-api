module.exports = (sequelize, Sequelize) => {
	const OS = sequelize.define("OS",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		descricao: {
			type: Sequelize.TEXT,
            validate: {
							allowNull: false
              }
		},
		situacao: {
			type: Sequelize.STRING(20),
            validate: {
							allowNull: false
              }
		},
		idLaudo: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
							allowNull: false
              }
		},
		idOficina: {
			type: Sequelize.INTEGER,
            validate: {
							allowNull: false
              }
		},
	},
	{
		freezeTableName: true,
		tablename: "OS",
		timestamps: false
	}
	);
	return OS;
};
