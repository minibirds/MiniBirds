module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        postId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING(1000)
        },
        img: {
            type: DataTypes.STRING(500)
        }
    })
}