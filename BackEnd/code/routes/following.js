const express = require('express');
let User = require('../models').User;
let Following = require('../models').Following;
let Follower = require('../models').Follower;
const { verify } = require('./middlewares');
let router = express.Router();

router.post('/', async (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, 'entry_minibirds');
        if(auth < 0) throw err;
        if(auth == req.body.userId) {
            let test = await Following.findOne({
                where:{userId:req.body.userId, followingId:req.body.followingId}
            });
            if(test) {
                err.status = '409';
                err.message = '이미 팔로우 중인 유저입니다';
                throw err;
            }
            let following = await Following.create({
                userId: req.body.userId,
                FollowingId: req.body.followingId
            });
            let follower = await Follower.create({
                userId: req.body.followingId,
                FollowerId: req.body.userId
            });
            if(following || follower) {
                let result = await Following.findAll({where: {userId : req.body.userId}});
                let nick = await User.findOne({where: {id : req.body.followingId}});
                console.log(result);
                res.json({
                    num : result.length,
                    nick : nick.nickname
                })
            }
        } else {
            err.status = '401';
            err.message = '권한이 없는 사용자 입니다';
            throw err;
        }
    } catch (error) {
        res.json({
            'status':err.status,
            'message':err.message
        })
    }
});



module.exports = router;