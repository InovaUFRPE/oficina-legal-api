module.exports = (sequelize, Sequelize) => {
	const Certificado = sequelize.define("Certificado",{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		descricao: {
			type: Sequelize.TEXT,
		},
		url: {
			type: Sequelize.TEXT
		},
		idMecanico: {
			type: Sequelize.INTEGER,
			foreignKey: true,
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