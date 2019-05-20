module.exports = (sequelize, Sequelize) => {
    const Oficina = sequelize.define('Oficina',{
        razaoSocial: {
            type: Sequelize.STRING(45)
        },
        endereco: {
            type: Sequelize.STRING(45)
        },
        complemento:{
            type: Sequelize.STRING(25)
        },
        cidade: {
            type: Sequelize.STRING(45)
        },
        bairro: {
            type: Sequelize.STRING(25)
        }
    },
    {
        freezeTableName: true,
        tablename: "Oficina",
        timestamps: false 
    });
    
    return Oficina;
}