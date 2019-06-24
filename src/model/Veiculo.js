module.exports = (sequelize, Sequelize) => {
    const Veiculo = sequelize.define('Veiculo', {
        modelo : {
            type: Sequelize.STRING(45)
        },
        ano: {
            type: Sequelize.STRING(4)
        },
        renavam:{
            type: Sequelize.STRING(9)
        },
        placa:{
            type: Sequelize.STRING(7)
        },
        idCliente:{
            type: Sequelize.INTEGER,
            allowNull: false     
        }
    },{
        freezeTableName: true,
        tablename: "Veiculo",
        timestamps: false
    });
    return Veiculo;
};