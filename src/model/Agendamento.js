module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define("Agendamento",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primarykey: true
        },
        data_hora:{
            type: Sequelize.DATE
        },
        idVeiculo:{
            type: Sequelize.INTEGER,
            foreignkey: true,
            validate: {
                notNull: true
              }
        },
        idOficina:{
            type: Sequelize.INTEGER,
            foreignkey: true,
            validate: {
                notNull: true
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