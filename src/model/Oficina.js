module.exports = (sequelize, Sequelize) => {
    const Oficina = sequelize.define('Oficina',{
        razaoSocial: {
            type: Sequelize.STRING(45),
            validate: {
                notNull: true
              }
        },
        endereco: {
            type: Sequelize.STRING(45),
            validate: {
                notNull: true
              }
        },
        complemento:{
            type: Sequelize.STRING(25)
        },
        cidade: {
            type: Sequelize.STRING(45),
            validate: {
                notNull: true
              }
        },
        bairro: {
            type: Sequelize.STRING(25),
            validate: {
                notNull: true
              }
        },
        latitude: {
            type: Sequelize.DOUBLE
        },
        longitude: {
            type: Sequelize.DOUBLE
        }
    },
    {
        freezeTableName: true,
        tablename: "Oficina",
        timestamps: false 
    });
    
    return Oficina;
}