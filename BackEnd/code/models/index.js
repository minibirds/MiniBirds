const Sequelize = require('sequelize');
require('dotenv').config();

const db = {};

const sequelize = new Sequelize(
    'minibirds', //db 이름
    'root', // 이름명
     process.env.DB_SECRET, // 비밀번호
    {
        'host': process.env.DB_HOST, // 사용할 호스트
        'dialect': 'mysql', // 사용할 DB 종류
        'operatorsAliases':false //deprecated 된 연산자 사용
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.Mention = require('./Mention')(sequelize, Sequelize);
db.Follower = require('./Follower')(sequelize, Sequelize);
db.Following = require('./Following')(sequelize, Sequelize);

// User 과 Post 1 : N 관계 지정
db.User.hasMany(db.Post, { foreignKey: 'userId', sourceKey: 'id' });
db.Post.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id'});

// User 과 Follower 1 : N 관계 지정
db.User.hasMany(db.Follower, { foreignKey: 'userId', sourceKey: 'id' });
db.Follower.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id'});

// User 과 Following 1 : N 관계 지정
db.User.hasMany(db.Following, { foreignKey: 'userId', sourceKey: 'id' });
db.Following.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id'});

// User 과 Mention 1 : N 관계 지정
db.User.hasMany(db.Mention, { foreignKey: 'userId', sourceKey: 'id' });
db.Mention.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id'});

// Post 와 Mention 1 : N 관계 지정
db.Post.hasMany(db.Mention, { foreignKey: 'postId', sourceKey: 'postId' });
db.Mention.belongsTo(db.Post, { foreignKey: 'postId', targetKey: 'postId'});

module.exports = db;