module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define("Agendamento",{
        data_hora:{
            type: Sequelize.DATE
        },
        idVeiculo:{
            type: Sequelize.INTEGER,
            foreignkey: true,
            validate: {
                allowNull: false
              }
        },
        idOficina:{
            type: Sequelize.INTEGER,
            foreignkey: true,
            validate: {
                allowNull: false
              }
        }

    },
    {
    freezeTableName: true,
    tablename: "Agendamento",
    timestamps: false
    });

    return Agendamento;
};