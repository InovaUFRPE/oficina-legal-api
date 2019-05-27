module.exports = (sequelize, Sequelize) => {
	const MecanicoOS = sequelize.define("MecanicoOS",{
		idOS: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			foreignKey: true,
            validate: {
                notNull: true
              }
		},
		idMecanico: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			foreignKey: true,
            validate: {
                notNull: true
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
