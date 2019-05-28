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
                notNull: true
              }
		},
		situacao: {
			type: Sequelize.STRING(20),
            validate: {
                notNull: true
              }
		},
		idLaudo: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
                notNull: true
              }
		},
		idOficina: {
			type: Sequelize.INTEGER,
            validate: {
                notNull: true
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
