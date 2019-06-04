module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define("Agendamento",{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        data_hora: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        idOficina: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        idVeiculo: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    {
        freezeTableName: true,
        tablename: "Agendamento",
        timestamps: false
    });
    return Agendamento;
};