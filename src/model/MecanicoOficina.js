module.exports = (sequelize, Sequelize) => {
	const MecanicoOficina = sequelize.define("MecanicoOficina",{
		idOficina: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			foreignKey: true,
		},
		idMecanico: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			foreignKey: true,
		}
	},
	{
		freezeTableName: true,
		tablename: "MecanicoOficina",
		timestamps: false
	}
	);
	return MecanicoOficina;
};