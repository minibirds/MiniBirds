module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Mention', {
        mentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    })
};