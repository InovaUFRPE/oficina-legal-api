module.exports = (sequelize, Sequelize) => {
    const Gestor = sequelize.define('Gestor', {
        nome:{
            type: Sequelize.STRING(45),
            validate: {
                notNull: true
              }
        },
        cpf: {
            type: Sequelize.STRING(11),
            validate: {
                notNull: true
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
                notNull: true
              }
        },
        idOficina: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: true
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