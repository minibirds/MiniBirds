module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Mention', {
        mentId: {
            type: DataTypes.STRING(20),
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    })
};