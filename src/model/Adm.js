module.exports = (sequelize, Sequelize) => {
    const Adm = sequelize.define('Adm', {
        nome:{
            type: Sequelize.STRING(45),
        },
        cpf: {
            type: Sequelize.STRING(11),
        },
        id:{
            type: Sequelize.INTEGER,
		    primaryKey: true,
		    autoIncrement: true
        },
        idUsuario: {
            type: Sequelize.INTEGER,
        }
    },{
        freezeTableName: true,
        tablename: "Adm",
        timestamps: false
    }
    );
    return Adm;
};