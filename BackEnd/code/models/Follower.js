module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Follower', {
        FollowerId: {
            type: DataTypes.STRING(20),
            primaryKey: true
        }
    })
}