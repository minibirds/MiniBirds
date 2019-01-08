const express = require('express');
const cors = require('cors');

require('dotenv').config();
let Follower = require('../models').Follower;
const { verify } = require('./middlewares');

let router = express.Router();
router.use(cors());

router.get('/', async (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, process.env.JWT_SECRET);
        if (auth) {
            let list = await Follower.findAll({
                attributes: ['FollowerId'],
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
            status: err.status,
            message: err.message
        })
    }
});

module.exports = router;