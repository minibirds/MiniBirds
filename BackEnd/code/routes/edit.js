let express = require('express');
let User = require('../models').User;
const { verify } = require('./middlewares');
let router = express.Router();

let jwt = require('jsonwebtoken');

router.put('/:id', async (req, res)=>{
   let token = req.cookies.sign;
   let err = {};
    try {
       let auth = verify(token, 'entry_minibirds');
       if(auth < 0) throw err;
       if(auth == req.params.id) {
           if(req.body.nickname) { // 닉네임 변경시
               await User.update(
                   {nickname: req.body.nickname},
                   {where: {id: req.params.id}}
                   )
           }
           if(req.body.password) { // 비밀번호 변경시
               await User.update(
                   {password: req.body.password},
                   {where: {id: req.params.id}}
               )
           }
           if(req.body.intro) { // 한줄소개 변경시
               await User.update(
                   {intro: req.body.intro},
                   {where: {id: req.params.id}}
               )
           }
           let user = await User.findOne({
               where : {id: req.params.id}
           });
           if(user) res.json(user);
           else {
               err.message = 404;
               err.message = 'id 에 해당하는 사용자를 찾을 수 없습니다';
               throw err;
           }
       }
       else {
           err.status = 401;
           err.message = '다른 사람의 정보는 수정할 수 없습니다';
           throw err;
       }
   } catch (err) {
        res.json({
            status: err.status,
            message: err.message
        });
   }
});

module.exports = router;