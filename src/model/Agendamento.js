module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define("Agendamento",{
        data_hora:{
            type: Sequelize.DATE
        },
        idVeiculo:{
            type: Sequelize.INTEGER,
            foreignkey: true,
        },
        idOficina:{
            type: Sequelize.INTEGER,
            foreignkey: true,
        }

    },
    {
    freezeTableName: true,
    tablename: "Agendamento",
    timestamps: false
    });

    return Agendamento;
};