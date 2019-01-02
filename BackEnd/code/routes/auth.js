let express = require('express');
let User = require('../models').User;
let router = express.Router();

let jwt = require('jsonwebtoken');

router.get('/signIn/:id/:password', async (req, res)=> {
    let err = {};
    try {
        const user = await User.findOne({
            where: {id: req.params.id},
        });
        if (user) {
            // 비밀번호 일치 시
            if (req.params.password == user.password) {
                let token = sign(user);
                res.cookie("sign", token);
                res.json({
                    'status': 200,
                    'token': token
                });
            }
            else {
                err.message = '비밀번호가 일치하지 않습니다'
                throw err;
            }
            function sign(user) {
                let token = jwt.sign({
                        // 토큰의 내용 (payload)
                        nickname: user.nickname,
                        intro: user.intro
                    },
                    'entry_minibirds', // 비밀키
                    {
                        expiresIn: '5m' // 유효시간 5분
                    }
                );
                return token;
            }
        } else {
            err.message = '아이디에 해당하는 사용자가 없습니다';
            throw err;
        }
    } catch (err) {
        res.status(401);
        res.json({
            status: 401,
            message: err.message
        })
    }
});

module.exports = router;