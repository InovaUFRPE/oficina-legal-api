module.exports = (sequelize, Sequelize) => {
    const Especializacao = sequelize.define("Especializacao", {
        descricao: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        tableName: "Especializacao"
    }
    );
    return Especializacao;
};