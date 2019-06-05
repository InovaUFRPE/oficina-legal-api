module.exports = (sequelize, Sequelize) => {
	const Certificado = sequelize.define("Certificado",{
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
		url: {
			type: Sequelize.TEXT
		},
		idMecanico: {
			type: Sequelize.INTEGER,
			foreignKey: true,
            validate: {
                allowNull: false
              }
		}
	},
	{
		freezeTableName: true,
		tablename: "Certificado",
		timestamps: false
	}
	);
	return Certificado;
};