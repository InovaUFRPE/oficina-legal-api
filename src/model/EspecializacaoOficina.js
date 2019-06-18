module.exports = (sequelize, Sequelize) => {
    const EspecializacaoOficina = sequelize.define("EspecializacaoOficina", {
        idEspecializacao: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            foreignKey: true
        },
        idOficina: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            foreignKey: true
        }
    },
    {
        freezeTableName: true,
        tableName: "EspecializacaoOficina",
        timestamps: false
    }
    );
    return EspecializacaoOficina;
}