const express = require('express');
const cors = require('cors');

require('dotenv').config();
let Following = require('../models').Following;
let Follower = require('../models').Follower;
const { verify } = require('./middlewares');

let router = express.Router();
router.use(cors());

// 다른 유저를 팔로우하는 API
router.post('/', (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, process.env.JWT_SECRET);
        if(auth) {
            Following.create({
                FollowingId: req.body.targetId,
                userId: auth
            })
                .then((followings)=>{
                    console.log(followings.userId);
                    Follower.create({
                        FollowerId: auth,
                        userId: req.body.targetId
                    })
                        .then((followers)=>{
                            console.log(followers.userId);
                            res.json({
                                nick : followings.FollowingId,
                            })
                        })
                })
                .catch((err)=>{
                    console.log(err);
                    res.json(err);
                })
        }
    } catch (err) {
        res.json({status:err.status, message:err.message});
    }
});

// 자신이 팔로우 중인 유저 리스트를 가져오는 API
router.get('/', async (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, process.env.JWT_SECRET);
        if(auth) {
            let list = await Following.findAll({
                attributes: ['followingId'],
                where: {userId: auth}
            });
            if(list) {
                res.json({
                    num: list.length,
                    list
                })
            }
        } else {
            err.status = '401';
            err.message = '권한이 없는 사용자 입니다';
            throw err;
        }
    } catch (err) {
        res.json({
            'status':err.status,
            'message':err.message
        })
    }
});

// 팔로우를 끊는 API
router.delete('/:targetId', async(req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, process.env.JWT_SECRET);
        if(auth < 0) throw err;
        let follow = await Following.findOne({
            where: {userId: auth, FollowingId: req.params.targetId}
        });
            if(follow) {
                let result = await Following.destroy({
                    where: {userId: auth, FollowingId: req.params.targetId}
                });
                if(result) {
                    let result2 = await Follower.destroy({
                        where: {userId: req.params.targetId, FollowerId: auth}
                    });
                    if(result2) {
                       res.json({
                           message: '팔로우가 취소되었습니다'
                       })
                    }
                }
            }
    } catch (err) {
        res.json({
            status: err.status,
            message: err.message
        })
    }
});

module.exports = router;