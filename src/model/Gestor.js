module.exports = (sequelize, Sequelize) => {
    const Gestor = sequelize.define('Gestor', {
        nome:{
            type: Sequelize.STRING(45),
            validate: {
                allowNull: false
              }
        },
        cpf: {
            type: Sequelize.STRING(11),
            validate: {
                allowNull: false
              }
        },
        id:{
            type: Sequelize.INTEGER,
		    primaryKey: true,
		    autoIncrement: true
        },
        idUsuario: {
            type: Sequelize.INTEGER,
            validate: {
                allowNull: false
              }
        },
        idOficina: {
            type: Sequelize.INTEGER,
            validate: {
                allowNull: false
              }
        }
    },{
        freezeTableName: true,
        tablename: "Gestor",
        timestamps: false
    }
    );
    return Gestor;
};