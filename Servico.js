module.exports = (sequelize, Sequelize) => {
    const Servico = sequelize.define("Servico", {
        nomeServico: {
            type: Sequelize.STRING
        },
        preco: {
            type: Sequelize.DOUBLE
        },
        tempoRealizacao: {
            type: Sequelize.TIME
        },
        idOficina: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        }
    },
    {
        freezeTableName: true,
        tablename: "Servico",
        timestamps: false
    }
    );
    return Servico;
};