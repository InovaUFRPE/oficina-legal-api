module.exports = (sequelize, Sequelize) => {
	const MecanicoOS = sequelize.define("MecanicoOS",{
		idOS: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			foreignKey: true,
            validate: {
							allowNull: false
              }
		},
		idMecanico: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			foreignKey: true,
            validate: {
							allowNull: false
              }
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
