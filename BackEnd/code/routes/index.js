const express = require('express');
const cors = require('cors');
const { Sequelize: {Op} } = require('../models');
let Post = require('../models').Post;
let Following = require('../models').Following;
const { verify } = require('./middlewares');
const router = express.Router();
router.use(cors());

//자신이 팔로우 한 사람의 게시물을 최신 순으로 가져오는 API
router.get('/:id', async (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, 'entry_minibirds');
        if(auth < 0) {
            err.status=401;
            throw err;
        }
        if(auth == req.params.id) {
            follow = await Following.findAll({
                attributes: ['FollowingId'],
                where: {userId: req.params.id}
            });
                if(follow) {
                    let query = [];
                    for(let i=0; i<follow.length; i++) {
                        query[i] = {userId : follow[i].dataValues.FollowingId};
                    }
                    console.log(query);
                    let posts = await Post.findAll({
                        where: {
                            [Op.or]: query
                        },
                        order:[['createdAt','DESC']]
                    });
                    if(posts) {
                        res.json(posts);
                    }
                } else {
                    err.status = 404;
                    err.message = '팔로우 중인 사람이 없어 게시물이 없습니다';
                    throw err;
                }
        } else {
            err.message = '권한이 없는 사용자입니다';
            err.status = 401;
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