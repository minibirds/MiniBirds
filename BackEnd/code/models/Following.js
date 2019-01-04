module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Following', {
        FollowingId: {
            type: DataTypes.STRING(20)
        }
    },{
        timestamps: false
    })
};