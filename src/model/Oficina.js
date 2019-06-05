module.exports = (sequelize, Sequelize) => {
    const Oficina = sequelize.define('Oficina',{
        razaoSocial: {
            type: Sequelize.STRING(45),
            validate: {
                allowNull: false
              }
        },
        endereco: {
            type: Sequelize.STRING(45),
            validate: {
                allowNull: false
              }
        },
        complemento:{
            type: Sequelize.STRING(25)
        },
        cidade: {
            type: Sequelize.STRING(45),
            validate: {
                allowNull: false
              }
        },
        bairro: {
            type: Sequelize.STRING(25),
            validate: {
                allowNull: false
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