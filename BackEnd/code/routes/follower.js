const express = require('express');
const cors = require('cors');

require('dotenv').config();
let Follower = require('../models').Follower;
let User = require('../models').User;
const { verify } = require('./middlewares');

let router = express.Router();
router.use(cors());

// 자신을 팔로우 하고 있는 유저들의 목록을 가져오는 API
router.get('/', async (req, res)=>{
    let err = {};
    let token = req.get("token");
    try {
        let auth = verify(token, process.env.JWT_SECRET);
        if (auth) {
            let list = await Follower.findAll({
                attributes: ['FollowerId'],
                where: {userId: auth}
            });
            let profiles = [];
            for(i=0; i<list.length; i++) {
                profiles[i] = await User.findOne({
                    attributes: ['nickname','img', 'intro','id'],
                    where: {id: list[i].dataValues.FollowerId}
                });
                Object.assign(list[i], profiles[i])
            }
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
            status: err.status,
            message: err.message
        })
    }
});

module.exports = router;