module.exports = (sequelize, Sequelize) => {
    const Servico = sequelize.define("Servico", {
        nomeServico: {
            type: Sequelize.STRING
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