const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize(
    'mini birds', //db 이름
    'root', // 이름명
    'espada8012!', // 비밀번호
    {
        'host': '127.0.0.1', // 사용할 호스트
        'dialect': 'mysql', // 사용할 DB 종류
        'operatorsAliases':false //deprecated 된 연산자 사용
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;