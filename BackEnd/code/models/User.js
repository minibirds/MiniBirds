module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.STRING(20),
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        intro: {
            type: DataTypes.STRING(50),
            defaultValue: '자기소개가 없습니다. 자신을 다른 사람들에게 소개해보세요'
        },
        img: {
            type: DataTypes.STRING(200)
        }
    }, {
        timestamps: false
    })
};