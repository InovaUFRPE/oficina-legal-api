module.exports = (sequelize, Sequelize) => {
    const Gestor = sequelize.define('Gestor', {
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
        },
        idOficina: {
            type: Sequelize.INTEGER,
        }
    },{
        freezeTableName: true,
        tablename: "Gestor",
        timestamps: false
    }
    );
    return Gestor;
};