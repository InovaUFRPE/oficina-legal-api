module.exports = (sequelize, Sequelize) => {
	const MecanicoOS = sequelize.define("MecanicoOS",{
		idOS: {
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
		tablename: "MecanicoOS",
		timestamps: false
	}
	);
	return MecanicoOS;
};
